<template>
  <form class="card-grid" @submit.prevent="submitForm" novalidate>
    <div class="field">
      <label for="name">Full Name</label>
      <input id="name" v-model.trim="form.name" type="text" placeholder="Alex Johnson" required />
    </div>

    <div class="field">
      <label for="email">Email</label>
      <input id="email" v-model.trim="form.email" type="email" placeholder="alex@email.com" required />
    </div>

    <div class="field">
      <label for="ticket">Ticket Type</label>
      <select id="ticket" v-model="form.ticketType">
        <option value="standard">Standard</option>
        <option value="vip">VIP</option>
        <option value="team">Team Pass</option>
      </select>
    </div>

    <div class="field">
      <label for="notes">Notes</label>
      <textarea id="notes" v-model.trim="form.notes" rows="4" placeholder="Tell us your goals for attending"></textarea>
    </div>

    <div class="row-actions">
      <button class="btn-primary" type="submit" :disabled="!isValid || isSubmitting">
        {{ isSubmitting ? 'Submitting...' : 'Reserve Seat' }}
      </button>
      <p v-if="message" class="message" role="status">{{ message }}</p>
    </div>
  </form>
</template>

<script setup>
import { computed, reactive, ref } from 'vue';

const form = reactive({
  name: '',
  email: '',
  ticketType: 'standard',
  notes: '',
});

const isSubmitting = ref(false);
const message = ref('');

const isValid = computed(() => {
  return form.name.length > 1 && /.+@.+\..+/.test(form.email);
});

async function submitForm() {
  if (!isValid.value) {
    message.value = 'Please enter a valid name and email.';
    return;
  }

  isSubmitting.value = true;
  message.value = '';

  try {
    await new Promise((resolve) => setTimeout(resolve, 650));
    message.value = 'Thanks. Your seat request has been recorded.';
  } finally {
    isSubmitting.value = false;
  }
}
</script>
