<template>
  <div class="mt-32">
    <div class="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-x-8">
      <div class="overflow-hidden rounded-lg bg-gray-900 hover:scale-105 transition duration-300">
        <a href="https://www.ensinio.com" target="_blank">
          <img src="../../src/assets/img/ensinio.png" class="object-cover object-center" />
        </a>
      </div>
      <div class="overflow-hidden rounded-lg bg-gray-900 hover:scale-105 transition duration-300">
        <a href="https://www.iporto.com.br" target="_blank">
          <img src="../../src/assets/img/iporto.png" class="object-cover object-center" />
        </a>
      </div>
      <div class="overflow-hidden rounded-lg bg-gray-900 hover:scale-105 transition duration-300">
        <a href="https://casadege.com.br" target="_blank">
          <img src="../../src/assets/img/casa_de_ge.png" class="object-cover object-center" />
        </a>
      </div>
      <div class="overflow-hidden rounded-lg bg-gray-900 hover:scale-105 transition duration-300">
        <img src="../../src/assets/img/cm.png" class="object-cover object-center" />
      </div>
      <div
        class="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900"
      ></div>
    </div>
  </div>
</template>

<script>
const jobs = [
  {
    company: "Ensinio",
    imageSrc: `ensinio.png`,
    link: "https://www.ensinio.com"
  },
  {
    company: "iPORTO",
    imageSrc: `iporto.png`,
    link: "https://iporto.com.br/"
  },
  {
    company: "Casa de Gê",
    imageSrc: `casa_de_ge.png`,
    link: "https://casadege.com.br/"
  },
  {
    company: "Congregação Mariana",
    imageSrc: `cm.png`
  }
];
</script>