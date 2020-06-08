<template>
  <div>
    <v-container>
      <div class="floating-circle-left" @mouseenter="show = true" @mouseleave="show = false">
        <nuxt-link to="/contact">
          <v-btn :class="{ active : show} " rounded class="rounded-btn">
          <transition name="slide-fade">
            <span v-if="show">Contact me</span>
          </transition>
            <v-icon :class="{ activepad : show}">mdi-email</v-icon></v-btn
          ></nuxt-link>
        
      </div>
      <div class="floating-circle-right">
        <a
          ><v-btn rounded class="rounded-btn"
            ><v-icon>mdi-arrow-up</v-icon></v-btn
          ></a
        >
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data(){
    return{
      show:false
    }
  }
};
</script>

<style lang="scss" scoped>

.slide-fade-enter-active{
  animation: fade-in 1.5s;
}
.slide-fade-leave-active{
  animation: fade-in 50ms reverse; 
}
@keyframes fade-in{
 0%{
   opacity:0;
 }
 100%{
   opacity:1;
 }
}
.floating-circle-left {
  position: fixed;
  left: 0;
  bottom: 0;
  margin: 1%;
}
.floating-circle-right {
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 1%;
}
.rounded-btn {
  height: 50px !important;
  min-width: 50px !important;
  padding: 0px !important;
   transition: all 0.35s ease;
   width:50px;
  &:hover{
    width:150px ;
    transition: all .35s ease;
 
  }
  .active{
    justify-content: flex-end;
  }
  .activepad{
    padding:0px 0px 0px 5px
  }
  }

</style>
