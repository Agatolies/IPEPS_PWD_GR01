import { LabelWithParam, MenuAction } from '@shared/model';

export interface DataListConfig {
    label: LabelWithParam[],
    translateKey: string;
    fields: FieldConfig[];
    actions?: MenuAction[];
}

export interface FieldConfig {
    param: string;
    type: DataType;
}

export enum DataType {
    STRING = 'STRING',
    GENDER = 'GENDER',
    BOOLEAN = 'BOOLEAN',
    DATETIME = 'DATETIME',
}
