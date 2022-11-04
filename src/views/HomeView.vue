<script>
  import CalcBox from '@/components/CalcBox.vue'
  export default {
    components: {
      CalcBox
    },
    data() {
      return {
        desiredSalary: 100000,
        benefitsPct: 20,
        bonusPct: 10,
        weekendDays: 104,
        country: "India",
        publicHoliday: 15,
        mandatoryHoliday: 12,
        sickDays: 7,
        nonBillablePct: 20,
        hours: 8
      }
    },
    computed: {
      targetSalary() {
        return Number(this.desiredSalary) + (Number(this.desiredSalary) * (Number(this.benefitsPct) / 100)) + (Number(this.desiredSalary) * (Number(this.bonusPct) / 100));
      },
      totalDays() {
        var xDays = Number(365 - (Number(this.weekendDays) + Number(this.publicHoliday) + Number(this.mandatoryHoliday) + Number(this.sickDays)));
        console.log(xDays);
        var nonBillableDays = Number(((Number(100-Number(this.nonBillablePct))/100)));
        return Math.floor(Number(Number(xDays)*Number(nonBillableDays)));
      },
      dayRate() {
        var dr =  Number(this.targetSalary) / Number(this.totalDays);
        // format as currency
        return dr;
      },
      monthlyRate() {
        var mr =  Number(this.targetSalary) / (Number(this.totalDays)/12);
        // format as currency
        return mr;
      },
      weeklyRate() {
        var wr =  Number(this.targetSalary) / Number(this.totalDays) * 5;
        // format as currency
        return wr;
      },
      hourlyRate() {
        var hr =  Number(this.dayRate) / Number(this.hours);
        // format as currency
        return hr;
      },
      
    }
  }
</script>

<template>
  <main class="px-4">
    
      SWITCH
      <h4 class="text-sm text-center text-opacity-50 -mb-6 text-lightGray my-10 uppercase tracking-big">Freelancer Pay</h4>
      <h1 class="text-center mb-0 headerText font-bold text-5xl leading-mega">What is my day rate?</h1>
   
    <section class="mb-12">
      <h2 class="text-white mb-12 text-xl font-semibold leading-8 max-w-2xl mx-auto text-center">As freelancers, we can often forget about key aspects of what we would receive as salaried employees, when setting our rates.</h2>
      <h3 class=" text-xl mb-3 font-bold leading-6 text-center text-white">Your target annual income</h3>
      <input class="border-4 mb-3 border-white mx-auto flex text-2xl font-semibold text-center rounded-xl max-w-lg bg-nearBlack w-full text-white py-4" type="number" v-model="desiredSalary" />
      <p class="text-lightGray text-opacity-50 text-sm text-center leading-6">This is your equivelant salaried income</p>
    </section>
    <CalcBox>
      <template v-slot:title>Benefits</template>
      <template v-slot:description>Most salaries positions come with healthcare, pension or 401k contributions and more.</template>
      <template v-slot:input>
        <div class="border-b border-dashed focus-within:border-opacity-100 border-opacity-50 border-lightGray">
          <input type="number" min="0" max="300" class="bg-transparent w-6 focus:outline-none focus-visible:ring-none focus-visible:border-none text-right mr-2" v-model="benefitsPct" />
          <span class="">%</span>
        </div>
        
      </template>
      
    </CalcBox>
    <CalcBox>
      <template v-slot:title>Bonus</template>
      <template v-slot:description>Doing well in your job as an employee, usually means you receive bonuses and equity compensation.</template>
      <template v-slot:input>
        <div class="border-b border-dashed focus-within:border-opacity-100 border-opacity-50 border-lightGray">
          <input type="number" min="0" max="300" class="bg-transparent w-6 focus:outline-none focus-visible:ring-none focus-visible:border-none text-right mr-2" v-model="bonusPct" />
          <span class="">%</span>
        </div>  
      </template>
      <template v-slot:secondary>The average bonus in tech is 15-25%</template>
    </CalcBox>
    <CalcBox>
      <template v-slot:title>Vacation days</template>
      <template v-slot:description>Don’t receive unlimited vacation days as a freelancer?</template>
      <template v-slot:input>
        <div class="border-b border-dashed focus-within:border-opacity-100 border-opacity-50 border-lightGray">
          <input type="number" min="0" max="300" class="bg-transparent w-6 focus:outline-none focus-visible:ring-none focus-visible:border-none text-right mr-2" v-model="mandatoryHoliday" />
          <span>days</span>
        </div>
      </template>
      <template v-slot:secondary>The average bonus in tech is 15-25%</template>
    </CalcBox>
    <CalcBox>
      <template v-slot:title>Public holidays</template>
      <template v-slot:description>You might work public holidays, but you shouldn’t factor them into your income target.</template>
      <template v-slot:input>
        <div class="border-b border-dashed focus-within:border-opacity-100 border-opacity-50 border-lightGray">
          <input type="number" min="0" max="300" class="bg-transparent w-6 focus:outline-none focus-visible:ring-none focus-visible:border-none text-right mr-2" v-model="publicHoliday" />
          <span>days</span>
        </div>
      </template>
      <template v-slot:secondary>We’ve defaulted to the US. View your countries</template>
    </CalcBox>
    <CalcBox>
      <template v-slot:title>Sick days</template>
      <template v-slot:description>The average number of unplanned days off (sick or otherwise) worldwide is 6.4 days.</template>
      <template v-slot:input>
        <div class="border-b border-dashed focus-within:border-opacity-100 border-opacity-50 border-lightGray">
          <input type="number" min="0" max="300" class="bg-transparent w-6 focus:outline-none focus-visible:ring-none focus-visible:border-none text-right mr-2" v-model="sickDays" />
          <span>days</span>
        </div>
      </template>
    </CalcBox>
    <CalcBox>
      <template v-slot:title>Non-billable work</template>
      <template v-slot:description>As a freelancer, you’ll spend time on non-billable work. This should be accounted for.</template>
      <template v-slot:input>
        <div class="border-b border-dashed focus-within:border-opacity-100 border-opacity-50 border-lightGray">
          <input type="number" min="0" max="300" class="bg-transparent w-6  focus:outline-none focus-visible:ring-none focus-visible:border-none text-right mr-2" v-model="nonBillablePct" />
          <span class="">%</span>
        </div>
        </template>
      
    </CalcBox>
    
    <section class="grid grid-cols-1 grid-rows-1">
    <div class="flex flex-row relative flex-wrap py-8 px-6 col-span-1 row-span-1 bg-nearBlack border-4 border-white rounded-xl max-w-lg mx-auto mb-12">
      <div class="result col-span-1 row-span-1 h-full w-full absolute -z-10"></div>
      <p class="w-full text-center text-lg font-semibold text-white mb-3">True target earnings:</p>
      <p class="text-white w-full text-center text-4xl font-semibold mb-4">{{ targetSalary.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }) }}</p>
      <p class="w-full text-center text-lg font-semibold text-white mb-3">Freelance rates are:</p>
      <div class="flex flex-row w-full">
        <div class="w-1/4">
          <p class="text-white font-bold text-center uppercase text-opacity-50 text-sm mb-2">Hourly</p>
          <p class="text-white text-xl font-bold text-center">{{ Math.ceil(hourlyRate).toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }) }}</p>  
        </div>
         <div class="w-1/4">
          <p class="text-white font-bold text-center uppercase text-opacity-50 text-sm mb-2">Daily</p>
          <p class="text-white text-xl font-bold text-center">{{ Math.ceil(dayRate).toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }) }}</p>  
        </div>
        <div class="w-1/4">
          <p class="text-white font-bold text-center uppercase text-opacity-50 text-sm mb-2">Weekly</p>
          <p class="text-white text-xl font-bold text-center">{{ Math.ceil(weeklyRate).toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }) }}</p>  
        </div>
        <div class="w-1/4">
          <p class="text-white font-bold text-center uppercase text-opacity-50 text-sm mb-2">Monthly</p>
          <p class="text-white text-xl font-bold text-center">{{ Math.ceil(monthlyRate).toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }) }}</p>  
        </div>
      </div>
      </div>
    </section>
  </main>
</template>


<style scoped>
input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        display: none;
      }
      input[type=number] {
        -moz-appearance: textfield;
        /* Firefox */
      }
.headerText {
background: linear-gradient(90.53deg, #9E00FF 0.94%, #FF006B 99.81%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;

text-shadow: 0px 88px 25px rgba(240, 8, 105, 0.01), 0px 56px 23px rgba(240, 8, 105, 0.04), 0px 32px 19px rgba(240, 8, 105, 0.15), 0px 14px 14px rgba(240, 8, 105, 0.26), 0px 4px 8px rgba(240, 8, 105, 0.29), 0px 0px 0px rgba(240, 8, 105, 0.3);
}
.result {
    border-radius: 100000px;
    background: conic-gradient(from 180deg at 50% 50%, #66119A 0deg, #27B3BC 101.25deg, #BC5D27 172.5deg, #BC2766 273.75deg, #66119A 360deg);
    filter: blur(40px);
    opacity: 1;
    animation-name: rotatebg;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
@keyframes bloom {
  0% {
      filter: blur(10px);
      opacity: 0.2;
  }
  25% {
      filter: blur(10px);
      opacity: 1;
  }
  90% {
      filter: blur(80px);
      opacity: 1;
  }
  90% {
      filter: blur(40px);
      opacity: 1;
  }
}
@keyframes rotatebg {
  0% {
      transform: rotate(0deg);
      filter: blur(calc(var(--size)/12));
  }
  50% {
      transform: rotate(180deg);
      filter: blur(calc(var(--size)/4));
  }
  100% {
      transform: rotate(360deg);
      filter: blur(calc(var(--size)/12));
  }
}
</style>
