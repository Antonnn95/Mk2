<template>
  <div>
    <nav id="mainNav">
      <router-link id="Home" to="/">Home</router-link>
      <router-link id="searchLink" to="/search">Search</router-link>
    </nav>
    <router-view/>
  </div>
</template>
