import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService } from 'src/app/service/chat.service';



interface ChatMessage {

  sender: 'user' | 'ai';

  text: string;

}


@Component({

  selector: 'app-ai-chat',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule
  ],

  templateUrl: './ai-chat.component.html',

  styleUrl: './ai-chat.component.css'

})


export class AiChatComponent {


  @ViewChild('chatBody')
  chatBody!: ElementRef;


  chatOpen = false;


  userMessage = '';


  isLoading = false;


  messages: ChatMessage[] = [

    {
      sender: 'ai',

      text:
        "Hi! I'm Sachin's AI portfolio assistant. " +
        "Ask me anything about his experience, projects, skills or career."
    }

  ];


  constructor(
    private chatService: ChatService
  ) {}


  /* =========================
     OPEN / CLOSE CHAT
  ========================= */

  toggleChat(): void {

    this.chatOpen = !this.chatOpen;

    if (this.chatOpen) {

      setTimeout(() => {
        this.scrollToBottom();
      }, 100);

    }

  }


  /* =========================
     SEND MESSAGE
  ========================= */

  sendMessage(): void {

    const message = this.userMessage.trim();


    if (!message || this.isLoading) {

      return;

    }


    /* Add user message */

    this.messages.push({

      sender: 'user',

      text: message

    });


    /* Clear input */

    this.userMessage = '';


    /* Loading */

    this.isLoading = true;


    this.scrollToBottom();


    /* Call Spring Boot */

    this.chatService.askAI(message).subscribe({

      next: (response) => {


        this.messages.push({

          sender: 'ai',

          text: response.reply

        });


        this.isLoading = false;


        this.scrollToBottom();


      },


      error: (error) => {


        console.error(
          'AI Chat Error:',
          error
        );


        this.messages.push({

          sender: 'ai',

          text:
            'Sorry, I am unable to respond right now. Please try again.'

        });


        this.isLoading = false;


        this.scrollToBottom();

      }

    });

  }


  /* =========================
     SUGGESTED QUESTIONS
  ========================= */

  askQuestion(question: string): void {

    if (this.isLoading) {

      return;

    }


    this.userMessage = question;


    this.sendMessage();

  }


  /* =========================
     ENTER KEY
  ========================= */

onEnter(event: Event): void {
  event.preventDefault();
  this.sendMessage();
}


  /* =========================
     SCROLL
  ========================= */

  private scrollToBottom(): void {

    if (!this.chatBody) {

      return;

    }


    setTimeout(() => {

      const element =
        this.chatBody.nativeElement;

      element.scrollTop =
        element.scrollHeight;

    }, 50);

  }


}