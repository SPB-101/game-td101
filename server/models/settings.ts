/**
 * Правило отключено потому что используется underscore в полях для бд
 * https://eslint.org/docs/rules/camelcase
 */
/* eslint camelcase: "off" */

import {
  AutoIncrement,
  PrimaryKey,
  AllowNull,
  Column,
  DataType,
  Model,
  Table,
  Unique,
} from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "settings",
})
export class UserSettingsTable extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number;

  @Unique
  @AllowNull(false)
  @Column(DataType.INTEGER)
  id_user: number;

  @Column(DataType.STRING)
  theme: string;
}
