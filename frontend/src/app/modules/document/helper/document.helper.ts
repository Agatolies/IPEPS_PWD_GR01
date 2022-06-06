import {DocumentCreatePayload, Documentdto, DocumentUpdatePayload} from "../Model";
import {Document} from "../Model";

export class DocumentHelper {
  public static fromDTO(dto: Documentdto): Document {
    return {
      document_id: dto.document_id,
      name: dto.name,
      description: dto.description,
      path: dto.path,
      type: dto.type,
      freeAccess: dto.freeAccess,
      deleted: dto.deleted,
      isEmpty: false
    }
  }

  public static toDo(business: Document): Documentdto {
    return {
      document_id: business.document_id,
      name: business.name,
      description: business.description,
      path: business.path,
      type: business.type,
      freeAccess: business.freeAccess,
      deleted: business.deleted
    }
  }

  public static getEmpty(): Document {
    return {
      document_id: '',
      name: '',
      description: '',
      path: '',
      type: '',
      freeAccess : false,
      deleted: false,
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
      deleted : false
    }
  }

  static fromDtoUpdatePayload(dto: Documentdto): DocumentUpdatePayload {
    return {
      ...dto,
      deleted: false
    }
  }

}




