<template>
  <form @submit.prevent="submit">
    <label for="email">Email:</label>
    <input id="email" type="email" required v-model="email" />

    <label for="password">Password:</label>
    <input id="password" type="password" required v-model="password" />
    <div v-if="passwordError" class="error">{{passwordError}}</div>

    <label for="role">Role:</label>

    <select class="role" v-model="role">
      <option value="developper">Web developper</option>
      <option value="designer">Web designer</option>
    </select>

    <label for="skills">Skills:</label>
    <input id="skills" type="text" v-model="tempSkill" @keyup.alt="addSkill" />
    <div v-for="skill in skills" :key="skill" class="pill">
      <span @click="removeSkill(skill)">{{ skill }}</span>
    </div>

    <div class="terms">
      <input id="terms" type="checkbox" required v-model="terms" />
      <label for="terms">Accept terms and conditions</label>
    </div>

    <div class="submit">
        <button>Create an account</button>
    </div>

    <!-- <div>
        <input id="nameOne" value="Shaun" type="checkbox" v-model="names">
        <label for="nameOne">Shaun</label>
    </div>
    <div>
        <input id="nameTwo" value="Yoshi" type="checkbox" v-model="names">
        <label for="nameTwo">Yoshi</label>
    </div>
    <div>
        <input id="nameThree" value="Mario" type="checkbox" v-model="names">
        <label for="name">Mario</label>
    </div> -->
  </form>

  <!-- <p>Email : {{email}}</p>
  <p>Password : {{password}}</p>
  <p>{{names}}</p> -->
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "developper",
      tempSkill: "",
      skills: ["test"],
      terms: false,
      passwordError:''
      // names:  []
    };
  },
  methods: {
    addSkill(event) {
      if (event.key === "," && this.tempSkill) {
        // if (!this.skills.includes(this.tempSkill.slice(0, -1))) {
        //   this.skills.push(this.tempSkill.slice(0, -1));
        // }
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill);
        }
        this.tempSkill = "";
      }
    },
    removeSkill(skill) {
      this.skills = this.skills.filter((item) => {
        return skill !== item
      });
    },
    submit(){
       //validate password
        this.passwordError = this.password.length > 5 ? '' : 'Password must be at least 6 characters longs'
        if(!this.passwordError){
            console.log('email', this.email);
            console.log('password', this.password);
            console.log('role', this.role);
            console.log('skills', this.skills);
            console.log('terms accepted', this.terms);
        }
    }
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
button{
    background: #0b6dff;
    border: 0;
    padding:10px 20px;
    margin-top: 20px;
    color: white;
    border-radius:20px;
}
.submit{
    text-align: center;
}
.error{
    color: #ff0062;
    margin-top: 10px;
    font-size:0.8em;
    font-weight:bold;
}
</style>