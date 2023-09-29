<template>
  <div class="text-brand-green py-24 px-5">
    <h2 class="font-hornbill text-4xl text-center mb-5">
      • <br />
      Professional Experience
    </h2>

    <JobBox
      v-for="job in jobs"
      v-bind:key="job.company"
      :company="job.company"
      :position="job.position"
      :timeFrame="job.timeFrame"
      :description="job.description"
      :isActive="job.isActive"
      :icons="job.tools"
      @click="job.isActive = !job.isActive"
    />

    <h2 class="font-hornbill text-4xl text-center mt-12">
      • <br />
      Personal/Side Projects
    </h2>

    <JobBox
      v-for="sideprojet in sideprojets"
      v-bind:key="sideprojet.company"
      :company="sideprojet.company"
      :descriptionAlwaysVisible="true"
      :position="sideprojet.date"
      :description="sideprojet.description"
      :icons="sideprojet.tools"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const jobs = ref([
  {
    company: "Uber",
    tools: ["kafka", "go", "figma", "redis"],
    position: "Software Engineer",
    timeFrame: "Sept 2022 - Sept 2023",
    description:
      "Uber acquired Cornershop and aimed to move the operation into it. I joined an emerging team, where we built integrations between Retailer's API and Uber. Mainly, the integrations were about retailer's loyalty programs and their particular requirements. At Uber, I improved my English skills; I learned how to work in a big-scale company, the importance of Design Docs, monitoring, observability, and micro services. Another of my responsibilities was to be part of the on-call rotations and take responsibility for unexpected situations",
    isActive: false,
  },
  {
    company: "Cornershop by Uber",
    tools: ["python", "django", "postgresql", "docker", "redis", "figma"],
    position: "Backend Engineer",
    timeFrame: "Ago 2021 - Sept 2022",
    description:
      "I joined Cornershop in 2021. It was a beautiful moment because I dreamed of working in a company where, as a customer, I loved it. I worked in the merchant administration panel, creating reports and dashboards for our merchant customers. Here, I started to see how a big company works. I learned the importance of working with more people and teams. Also, I acquired more expertise in writing tests, thinking in/coding software more scalable, communicating better, and improving my English skills.",
    isActive: false,
  },
  {
    company: "CheckRocket",
    tools: [
      "aws",
      "docker",
      "k8s",
      "php",
      "laravel",
      "typescript",
      "nginx",
      "linux",
      "node",
      "angular",
      "nestjs",
      "vue",
      "mongo",
      "postgresql",
      "mysql",
      "redis",
      "tailwind",
    ],
    position: "Software Engineer",
    timeFrame: "May 2015 - Ago 2021",
    description:
      "Engineer behind checkrocket.com. I joined when this software was only an MVP, and my responsibility was to make the software more mature and professional. Since 2015, we've created a better piece of software using Laravel, driving into best practices like using CI/CD, testing, using migrations over the principal database, and upgrading the production environment to something more scalable on AWS. I was like a Fullstack Engineer, coding from infrastructure, frontend, backend, and the hybrid mobile application.",
    isActive: false,
  },
  {
    company: "Octano",
    tools: ["php", "js", "css", "scss", "angular", "codeigniter", "wordpress"],
    position: "Web Developer",
    timeFrame: "Ago 2014 - Apr 2015",
    description:
      "I built sites for the agency's clients. Here, I started to have more experience working with customers, listening, and taking better requirements. I was beginning to see that my role is not only about code. It is about solving problems.",
    isActive: false,
  },
  {
    company: "FXCM Chile",
    tools: ["js", "php", "laravel", "mysql", "linux"],
    position: "Web Developer",
    timeFrame: "Mar 2014 - Ago 2014",
    description:
      "My principal responsibility was rebuilding the company's website to something more administrable and maintainable. I also helped send mailing campaigns daily with news in the forex world.",
    isActive: false,
  },
  {
    company: "Open LatinoAmerica",
    tools: ["php", "mysql", "css", "js"],
    position: "Junior Developer ",
    timeFrame: "Jun 2013 - Mar 2014",
    description:
      "I worked building custom tools for the agency's clients. I learned a bit about the educational environment using different LMS.",
    isActive: false,
  },
  {
    company: "Netglobalis",
    tools: ["php", "mysql", "linux", "js", "css"],
    position: "Data center Operator/Junior Developer",
    timeFrame: "Dic 2012 - Mar 2013",
    description:
      "This experience was an internship where I was the first line of support for clients in a technical call center and administrating some hosting servers. We had a pilot with an essential web tool connected to an Arduino, but it still needed to be finished.",
    isActive: false,
  },
]);

const sideprojets = ref([
  {
    company: "Rocota",
    date: "Present",
    description:
      "It isn't alive yet, but it's an e-commerce store for Rocota, a hand-made brand that creates beautiful pottery pieces. I'm building it with Shopify.",
    tools: ["css", "shopify"],
  },
  {
    company: "Tomaton",
    date: "2020",
    description:
      "It's an application to enjoy with friends simulating a board game. It's a drinking game where players can play on their device, having fun in real-time with games like voting someone or timers. It was written with Flutter, using Cloud Firestore, and designed from scratch in Figma. It is abandoned, but I'm planning/developing a second version.",
    tools: ["figma", "firebase", "flutter"],
  },
  {
    company: "Pide Club",
    date: "2019",
    description:
      "It was a small e-commerce store for people who needed control of their orders and products. The potential client was Instagram profiles that sell products or services via DM. Sadly, the MVP/pilot was not successful.",
    tools: ["figma", "tailwind", "laravel", "vue", "postgresql", "redis"],
  },
  {
    company: "Motorex Chile",
    date: "2015",
    description:
      "I built custom e-commerce over Laravel to solve particular business requirements in their B2B and B2C operations.",
    tools: ["laravel", "js", "postgresql", "redis", "css"],
  },
]);
</script>
