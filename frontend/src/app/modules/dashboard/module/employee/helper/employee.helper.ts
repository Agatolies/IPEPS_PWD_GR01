import { EmployeeDto } from '@dashboard/module/employee/model/dto';
import { Employee } from '@dashboard/module/employee/model/business/employee';
import { EmployeeCreatePayload, EmployeeSearchPayload, EmployeeUpdatePayload } from '@employee/model/payload';
import { SortEnum, SortFilter } from '@shared/model';

export class EmployeeHelper {
  public static fromDto(dto: EmployeeDto): Employee {
    return {
      id: dto.employee_id,
      lastname: dto.lastname,
      firstname: dto.firstname,
      modality: dto.modality,
      term: dto.term,
      category: dto.category,
      subdivision: dto.subdivision,
      gender: dto.gender,
      matricule: dto.matricule,
      rank: dto.rank,
      deleted: dto.deleted,
      deletedAt: dto.deletedAt,
      deletedBy: dto.deletedBy,
      isEmpty: false
    }
  }

  public static toDto(business: Employee): EmployeeDto {
    return {
      employee_id: business.id,
      lastname: business.lastname,
      firstname: business.firstname,
      modality: business.modality,
      term: business.term,
      category: business.category,
      subdivision: business.subdivision,
      gender: business.gender,
      matricule: business.matricule,
      rank: business.rank,
      deleted: business.deleted,
      deletedBy: business.deletedBy,
      deletedAt: business.deletedAt
    }
  }

  public static getEmpty(): Employee {
    return {
      id: '',
      lastname: '',
      firstname: '',
      modality: '',
      term: 0,
      category: '',
      subdivision: '',
      gender: '',
      matricule: '',
      rank: '',
      deleted:false,
      deletedAt: new Date(),
      deletedBy:'',
      isEmpty: true
    }
  }

  static getCreatePaylaod(): EmployeeCreatePayload {
    return {
      lastname: '',
      firstname: '',
      modality: '',
      term: 0,
      category: '',
      subdivision: '',
      gender: '',
      matricule: '',
      rank: '',
      deleted:false,
      deletedAt: new Date(),
      deletedBy:'',
    }
  }

  static fromDtoToUpdatePayload(dto: EmployeeDto): EmployeeUpdatePayload {
    return {...dto}
  }


  static emptySearch(): EmployeeSearchPayload {
    return {
      lastname: '',
      firstname: '',
      modality: '',
      term: 0,
      category: '',
      subdivision: '',
      gender: '',
      matricule: '',
      rank: '',
      deleted:false,
      deletedAt: new Date(),
      deletedBy:'',
    }
  }

  static defaultSort(): SortFilter {
    return {sort: SortEnum.ASC, field: 'lastname'};
  }
}
