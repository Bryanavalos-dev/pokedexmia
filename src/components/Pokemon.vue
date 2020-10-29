<template>
  <!-- <div class="flex flex-col">
    <span v-if="pokemon.types">{{ pokemon.types.name }}</span>
    <button class="bg-red-500" @click="tab = 'about'">About</button>
    <button class="bg-blue-500" @click="tab = 'base'">Base</button>

    <div v-if="tab == 'about'">
      about
    </div>
    <div v-if="tab == 'base'">
      base
    </div>
  </div> -->
  
  <!-- contenedor principal -->
  <div class="flex justify-center">
   <!-- contenedor centrado -->
    <div class="celular:w-screen font-body relative  h-screen flex-col flex justify-between" :class="`bg-${$route.params.color}-400`">
      <!-- contenedor inforarriba -->
      <div class="w-full h-64 flex flex-col p-4">
        <!-- contenedorflechacorazon -->

        <div class=" flex w-full h-8  justify-between">
          <router-link to="/" tag="div"><svg class="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg></router-link>
          <div class="cursor-pointer"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></div>
         
        </div>

        <!-- contenedornombrepoderes       -->
        <div class="flex flex-row justify-between">
          <!-- contenedornombreypoderes -->
          <div class="flex flex-col ">
            <div class="flex ">
              <span v-if="pokemon.name" class="text-white font-bold">{{ pokemon.name }}</span>
            </div>
            <div class="w-full flex items-center ">
              <span v-for="(t, j) of pokemon.types" :key="j" class=" rounded-full w-full px-2 mr-2 " :class="`bg-${$route.params.color}-200`" >{{pokemon.types[j].type.name}}</span>
            </div>
          </div>
          <!-- contenedorid -->
          <div class="flex flex-col justify-center">
              <span>#0{{pokemon.id}}</span>
          </div>
        </div>
         


        
      </div>
      <div class="flex justify-center absolute top-50 left-45">
          <div class="w-48 h-48 flex  ">
            <img :src="`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`" class="h-full w-full">
          </div>      
         </div>
      <!-- contenedor inforabajo -->
      <div class="w-screen rounded-t-3xl  h-11/20 bg-white ">
         
      </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Pokemon',
  created() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${this.$route.params.name}`)
      .then(res => this.pokemon = res.data)
  },
  data(){
    return {
      pokemon: {},
      tab: 'about',
      value: 'hola'
    }
  }
}
</script>