import { Injectable } from '@nestjs/common';
import { ApartmentRepository } from './apartment.repository';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { PaginationParams } from './dto/pagination.dto';

/**
 * Service for business logic related to apartments.
 * Handles creation, retrieval, search, and deletion of apartments.
 */
@Injectable()
export class ApartmentService {
  constructor(private readonly apartmentRepository: ApartmentRepository) {}

  /**
   * Create a new apartment.
   * @param createApartmentDto Apartment data
   * @returns The created apartment
   */
  create(createApartmentDto: CreateApartmentDto) {
    return this.apartmentRepository.create(createApartmentDto);
  }

  /**
   * Create multiple apartments.
   * @param createApartmentDtos Array of apartment data
   * @returns The created apartments
   */
  createMany(createApartmentDtos: CreateApartmentDto[]) {
    return this.apartmentRepository.createMany(createApartmentDtos);
  }

  /**
   * Get all apartments with pagination.
   * @param pagination Pagination parameters
   * @returns Paginated apartments and meta info
   */
  async findAll(pagination?: PaginationParams) {
    const { apartments, totalRows } =
      await this.apartmentRepository.findAllWithPagination(pagination);
    return {
      data: apartments,
      totalRows: totalRows,
      returnedRowsCount: apartments.length,
      ...((pagination.page ?? 1) && {
        numOfPages: Math.ceil(totalRows / (pagination.limit ?? 10)),
        pageNumber: pagination.page ?? 1,
      }),
    };
  }

  /**
   * Get a single apartment by ID.
   * @param id Apartment ID
   * @returns The found apartment
   */
  findOne(id: string) {
    return this.apartmentRepository.findOne(id);
  }

  /**
   * Search apartments by query string.
   * @param query Search query
   * @returns List of matching apartments
   */
  async searchApartments(query: string) {
    return this.apartmentRepository.searchApartments(query);
  }

  // update(id: number, updateApartmentDto: UpdateApartmentDto) {
  //   return `This action updates a #${id} apartment`;
  // }

  /**
   * Remove an apartment by ID.
   * @param id Apartment ID
   * @returns The removed apartment
   */
  remove(id: string) {
    return this.apartmentRepository.remove(id);
  }

  /**
   * Remove all apartments.
   * @returns Result of the delete operation
   */
  removeAll() {
    return this.apartmentRepository.removeAll();
  }
}
