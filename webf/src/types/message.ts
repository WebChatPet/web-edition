export interface IMessage extends IMessageEvents {
  id: string,
  text: string,
  timestamp: Date,
  from: string, // as UserId,
  attachments?: IAttachment[],
}

export interface IMessageEvents {
  onViewed?: () => void,
  onClicked?: () => void,
  onEdited?: () => void,
  onDeleted?: () => void,
  onDelete?: () => void,
}

export interface IAttachment extends IAttachmentEvents {
  id: string,
  type: 'code' | 'image' | 'video' | 'audio',
  blob: Blob | string
}

export interface IAttachmentEvents {
  onViewed?: () => void,
  onClicked?: () => void,
  onError?: () => void,
}

export interface IEmojies extends IEmojiEvents {
  id: string // emoji id,
  code: string // emoji code
}

export interface IEmojiEvents {
  onClicked?: () => void
}