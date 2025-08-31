import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Apartment } from './entities/apartment.entity';
import { Repository } from 'typeorm';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { PaginationParams } from './dto/pagination.dto';
import { IMAGES_URL } from './images/imgesURL';

const imageArray = IMAGES_URL;
let imageIndex = 0;

/**
 * Repository for managing Apartment entities in the database.
 * Handles CRUD operations, pagination, and full-text search.
 */
@Injectable()
export class ApartmentRepository {
  constructor(
    @InjectRepository(Apartment)
    private readonly apartmentRepository: Repository<Apartment>,
  ) {}

  /**
   * Create and save a new apartment, assigning a rotating image.
   * @param createApartmentDto Apartment data
   * @returns The created apartment
   */
  create(createApartmentDto: CreateApartmentDto) {
    const createdApartment = this.apartmentRepository.create({
      ...createApartmentDto,
      image: imageArray[imageIndex % imageArray.length],
    });
    imageIndex++;
    return this.apartmentRepository.save(createdApartment);
  }

  createMany(createApartmentDtos: CreateApartmentDto[]) {
    const apartments = createApartmentDtos.map((dto) => {
      const apartment = this.apartmentRepository.create({
        ...dto,
        image: imageArray[imageIndex % imageArray.length],
      });
      imageIndex++;
      return apartment;
    });
    return this.apartmentRepository.save(apartments);
  }

  /**
   * Find all apartments with pagination.
   * @param pagination Pagination parameters
   * @returns Apartments and total count
   */
  async findAllWithPagination(pagination?: PaginationParams) {
    const skip = ((pagination.page ?? 1) - 1) * (pagination.limit ?? 10);

    const [apartments, totalRows] = await this.apartmentRepository.findAndCount(
      {
        skip,
        take: pagination.limit ?? 10,
      },
    );
    return { apartments, totalRows };
  }

  /**
   * Find a single apartment by ID.
   * @param id Apartment ID
   * @throws NotFoundException if not found
   * @returns The found apartment
   */
  async findOne(id: string) {
    const apartmentFound = await this.apartmentRepository.findOneBy({ id });
    if (!apartmentFound) throw new NotFoundException(`Apartment Not Found`);
    return apartmentFound;
  }

  /**
   * Remove an apartment by ID.
   * @param id Apartment ID
   * @returns The removed apartment
   */
  async remove(id: string) {
    const apartmentFound = await this.findOne(id);
    return this.apartmentRepository.remove(apartmentFound);
  }

  /**
   * Remove all apartments from the database.
   * @returns Result of the delete operation
   */
  async removeAll() {
    return this.apartmentRepository.deleteAll();
  }

  /**
   * Full-text search for apartments by query string.
   * @param query Search query
   * @returns List of matching apartments
   */
  async searchApartments(query: string): Promise<Apartment[]> {
    return this.apartmentRepository
      .createQueryBuilder('a')
      .where(`a.search_vector @@ to_tsquery('english', :tsQuery)`, {
        tsQuery: query
          .trim()
          .split(/\s+/) // split words by space
          .join(' | '), // join with OR operator
      })
      .orderBy(
        `ts_rank(a.search_vector, to_tsquery('english', :tsQuery))`,
        'DESC',
      )
      .getMany();
  }
}
