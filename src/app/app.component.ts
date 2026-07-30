import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  menuOpen = false;
  year = new Date().getFullYear();

  skills = [
    'Java 8+','Spring Boot','Microservices','REST APIs','Angular','React',
    'PostgreSQL','MySQL','MongoDB','Redis','Kafka','Docker','AWS','SAP Hybris'
  ];

  projects = [
    {
      name: 'Agri Darshan',
      role: 'Java Developer',
      period: 'Dec 2024 — Dec 2025',
      text: 'Large-scale government agriculture platform with CMDashboard, CMS, farmer lottery, Aadhaar authentication, DDO payments, Pine Labs POS, audit workflows and Redis-backed performance.',
      tags: ['Java','Spring Boot','PostgreSQL','Redis','Aadhaar','Payments'],
      icon: 'AG'
    },
    {
      name: 'MotoLensAI',
      role: 'Frontend Developer',
      period: 'Sep 2023 — May 2024',
      text: 'AI-powered mobile experience for road-safety insights with Firebase OTP/social login, camera and video capture, GPS tracking and secure media sharing.',
      tags: ['Angular','Ionic','Capacitor','Firebase','GPS','AI'],
      icon: 'ML'
    },
    {
      name: 'Estimation Tool',
      role: 'Full Stack Developer',
      period: 'Jan 2023 — Jul 2023',
      text: 'AI-assisted task estimation and analytics solution integrating JIRA APIs, REST services and AWS-hosted workflows with scalable data processing.',
      tags: ['Spring Boot','Angular','JIRA API','AWS','REST API'],
      icon: 'ET'
    }
  ];

  experience = [
    {
      company: 'Aurionpro Solutions',
      role: 'Software Engineer',
      period: 'Dec 2024 — Dec 2025',
      points: [
        'Built backend services with Java, Spring Boot and PostgreSQL for high-scale farmer schemes.',
        'Integrated Aadhaar APIs, payment modules and Redis caching.',
        'Worked onsite with stakeholders on requirements, production issues and delivery.'
      ]
    },
    {
      company: 'Clavrit Digital Solution',
      role: 'Software Engineer',
      period: 'May 2022 — May 2024',
      points: [
        'Built full-stack enterprise applications using Spring Boot, Angular and MySQL.',
        'Designed reusable REST APIs and improved database structures for scalability.',
        'Worked on AI-driven tools, SAP Hybris commerce and Ionic mobile applications.'
      ]
    }
  ];

  toggleMenu() { this.menuOpen = !this.menuOpen; }
  closeMenu() { this.menuOpen = false; }
}