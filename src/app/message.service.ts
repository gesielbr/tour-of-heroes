import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor() {}

  private messages: string[] = [];

  add(messages: string): void {
    this.messages.push(messages);
  }

  clear(): void {
    this.messages = [];
  }

  getMessages(): string[] {
    return this.messages;
  }
}
