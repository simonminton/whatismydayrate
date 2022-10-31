<script>

  export default {
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
      hourlyRate() {
        var hr =  Number(this.dayRate) / Number(this.hours);
        // format as currency
        return hr;
      }
    }
  }
</script>

<template>
  <main>
    <header>
<h1 class="text-3xl text-center my-10">What is my day rate?</h1>
    </header>
    <section class="bg-gray-50 py-10">
      <h1 class="text-2xl text-center">Target salary:</h1>
      <input class="border border-slate-200 mx-auto flex text-2xl text-center rounded-md" type="number" v-model="desiredSalary" />
    </section>
    <section class="text-center text-lg max-w-3xl mx-auto py-10">
      <p class="mb-6">We start with your target salary of {{ desiredSalary.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }} before deductions (tax etc.). Most salaried positions come with some form of benefits (healthcare, pension contributions and more), and we estimate that replacing these would cost about <input type="number" class="inline border-b-2 border-slate-500 w-10 text-center" v-model="benefitsPct" />% of that salary. Then, most professional salaried employees would hope for a bonus, again, we assume <input type="number" class="inline border-b-2 border-slate-500 w-10 text-center" v-model="bonusPct" />%. That leaves us with a target of {{ targetSalary.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }} to make.</p>
      <p class="mb-6">Of the 365 days in a year, <input type="number" class="inline border-b-2 border-slate-500 w-12 text-center" v-model="weekendDays" /> are weekends. We think you are in {{ country }} and our data says you have <input type="number" class="inline border-b-2 border-slate-500 w-10 text-center" v-model="publicHoliday" /> paid public holidays. We've also used that data to match your country's mandatory paid holiday: <input type="number" class="inline border-b-2 border-slate-500 w-10 text-center" v-model="mandatoryHoliday" /> days</p>
      <p class="mb-6">The average number of unplanned (sick or otherwise) days worldwide is 6.4, but we'll use <input type="number" class="inline border-b-2 border-slate-500 w-10 text-center" v-model="sickDays" /> to be safe.</p>
      <p class="mb-6">Finally, as a freelancer, approximately <input type="number" class="inline border-b-2 border-slate-500 w-10 text-center" v-model="nonBillablePct" />% of your time is spent on non-billable work, so we take that out of the picture too.</p>
      <p class="mb-6">That gives us {{ targetSalary.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }}/{{ totalDays }} days for a day rate of {{ dayRate.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }}. We'd recommend rounding that up to the nearest 5 for the sake of sane accounting.</p>
      <p class="mb-6">Assuming you work <input type="number" class="inline border-b-2 border-slate-500 w-10 text-center" v-model="hours" /> hours each day, thay's an hourly rate of {{ hourlyRate.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }}.</p>
    </section>
  </main>
</template>
