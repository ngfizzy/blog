export class UnknownObjectPath {
  message: string;
  path: string;

  constructor(path: string, message: string) {
    this.path = path;
    this.message = message;
  }
}
