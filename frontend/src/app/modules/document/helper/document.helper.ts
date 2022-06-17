import {DocumentCreatePayload, Documentdto, DocumentUpdatePayload} from "../Model";
import {Document} from "../Model";

export class DocumentHelper {
  public static fromDTO(dto: Documentdto): Document {
    return {
      id: dto.document_id,
      name: dto.name,
      description: dto.description,
      path: dto.path,
      type: dto.type,
      freeAccess: dto.freeAccess,
      employee:dto.employee,
      isEmpty: false
    }
  }



  public static getEmpty(): Document {
    return {
      id: '',
      name: '',
      description: '',
      path: '',
      type: '',
      freeAccess : false,
      employee: '',
      isEmpty: true
    }
  }

  static getCreatePayload(): DocumentCreatePayload {
    return {
      name: '',
      description: '',
      path: '',
      type: '',
      freeAccess : false,
      employee:''
    }
  }

  static fromDtoUpdatePayload(dto: Documentdto): DocumentUpdatePayload {
    return {
      ...dto,
    }
  }

}




