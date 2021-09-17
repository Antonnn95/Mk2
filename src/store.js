import { createStore } from "vuex" 

const store = createStore({
   state:{
      //   Results:{
      //      name:"",
      //      browserId:"",
      //      album:{
      //         name:"",
      //         browserId:""
      //      },
      //      artist:{
      //         name:"",
      //         browserId:""
      //      }
      //   }
      Result: [],
      currentVideoId: '',
      currentArtist: []
   },
   mutations:{
      setResult(state, Result){
          state.Result = Result;
          console.log(Result)
       },
       loadData(state, data){
          state.Result = data
       },
       setCurrentSong(state, currentVideoId){
          state.currentVideoId = currentVideoId
          console.log(currentVideoId)
       },
       setCurrentArtist(state, currentArtist){
          state.currentArtist = currentArtist
          console.log(currentArtist)
       }
       
   },
   actions:{
      async loadMusic( {commit}, searchObj){
         let result = await fetch('https://yt-music-api.herokuapp.com/api/yt/'+searchObj.searchOption+'/'+searchObj.searchString)
         let data = await result.json()
         commit('setResult', data)
     },
     saveCurrentSong( {commit}, currentVideoId){
        commit('setCurrentSong', currentVideoId)
     },
     saveCurrentArtist( {commit}, currentBrowserId){
        commit('setCurrentArtist', currentBrowserId)
     }
   }
})

export default store