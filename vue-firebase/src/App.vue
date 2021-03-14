<template>
  <div id="app">
    {{firebaseData}}
    <form @submit.prevent="updateFirebaseForm" @input="fileUpdate"> 
      <div>
        <div>
          <label for="">name</label>
          <input type="text" name="name" v-model="formData.name">
        </div>
        <div>
          <label for="">city</label>
          <input type="text" name="city" v-model="formData.city">
        </div>
        <div>
          <label for="">job</label>
          <input type="text" name="job" v-model="formData.job">
        </div>
        <div>
          <label for="">age</label>
          <input type="number" name="age" v-model="formData.age">
        </div>
      </div>
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  </div>
</template>

<script>
import { db } from './firebase';
import { debounce } from 'debounce';
const documentPath = 'contact/javiermorato';

export default {
  data() {
    return {
      firebaseData: null,
      formData: {},
      state: 'loading'
    }
  },
  firestore(){
    return {
      firebaseData: db.doc(documentPath)
    }
  },
  methods: {
    async updateFirebaseForm(){
      try {
        await db.doc(documentPath).set(this.formData);
        this.state = 'synced';

      } catch (error) {
        this.errorMessage = JSON.stringify(error);
        this.state = 'error';
      }
    },
    fileUpdate(){
      this.state = 'modified';
      this.debouncedUpdate();
    },
    debouncedUpdate: debounce(function(){
      this.updateFirebaseForm();
    }, 1500)
  },
   created: async function() {
     const docRef = db.doc(documentPath);
     let data = (await docRef.get()).data();
     if(!data) {
       this.formData = {name: '', city: '', job: '', age: 0}
     }else {
       this.formData = data;
     }
   }
  
}
</script>

<style scoped>

</style>

