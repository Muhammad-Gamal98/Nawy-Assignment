import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ApartmentService } from './apartment.service';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { PaginationParams } from './dto/pagination.dto';

/**
 * Controller for managing apartments.
 * Provides endpoints to create, retrieve, search, and delete apartments.
 */
@ApiTags('apartment')
@Controller('apartment')
export class ApartmentController {
  constructor(private readonly apartmentService: ApartmentService) {}

  /**
   * Create a new apartment.
   * @param createApartmentDto Apartment data
   * @returns The created apartment
   */
  @Post()
  create(@Body() createApartmentDto: CreateApartmentDto) {
    return this.apartmentService.create(createApartmentDto);
  }

  /**
   * Create multiple apartments.
   * @param createApartmentDtos Array of apartment data
   * @returns The created apartments
   */
  @Post('many')
  @ApiBody({ type: CreateApartmentDto, isArray: true })
  createMany(@Body() createApartmentDtos: CreateApartmentDto[]) {
    return this.apartmentService.createMany(createApartmentDtos);
  }

  /**
   * Get a paginated list of apartments.
   * @param pagination Pagination parameters (page, limit)
   * @returns List of apartments and total count
   */
  @Get()
  findAll(@Query() pagination?: PaginationParams) {
    return this.apartmentService.findAll(pagination);
  }

  /**
   * Search apartments by query string (unit name, number, or project).
   * @param query Search query
   * @returns List of matching apartments
   */
  @Get('search')
  search(@Query('q') query: string) {
    return this.apartmentService.searchApartments(query);
  }

  /**
   * Get a single apartment by ID.
   * @param id Apartment ID
   * @returns The found apartment
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apartmentService.findOne(id);
  }

  /**
   * Delete an apartment by ID.
   * @param id Apartment ID
   * @returns The deleted apartment
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apartmentService.remove(id);
  }

  /**
   * Delete all apartments.
   * @returns Result of the delete operation
   */
  @Delete()
  removeAll() {
    return this.apartmentService.removeAll();
  }
}
