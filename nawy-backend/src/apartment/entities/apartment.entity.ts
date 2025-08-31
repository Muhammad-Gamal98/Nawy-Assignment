import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Apartment entity representing the "apartment" table in the database.
 */
@Entity()
export class Apartment {
  /**
   * Primary key (auto-generated)
   */
  @PrimaryGeneratedColumn()
  id: string;

  /**
   * Name of the apartment unit
   */
  @Column()
  unitName: string;

  /**
   * Number of the apartment unit
   */
  @Column()
  unitNumber: number;

  /**
   * Description of the apartment
   */
  @Column()
  description: string;

  /**
   * Image URL for the apartment
   */
  @Column()
  image: string;

  /**
   * Price of the apartment
   */
  @Column()
  price: number;

  /**
   * Project name the apartment belongs to
   */
  @Column()
  project: string;

  /**
   * Full-text search vector (used for efficient searching)
   */
  @Column({ type: 'tsvector', select: false, nullable: true })
  search_vector: string;
}
