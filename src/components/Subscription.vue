<template>
  <div class="subscriptions">
    <div class="subscriptions-email">
      <p class="subscriptions-title">Poslovi na e-mail</p>
      <p class="subscriptions-subtitle">E-mail obavestenja o konkursima</p>
      <div class="form-group">
        <input
          type="email"
          class="form-control search-bar-input"
          id="subscription-email"
          aria-describedby="subscription-email"
          placeholder="Prijavi se za email obavestenja"
        />
      </div>
      <button class="button button-cta-blue">Prijavi se</button>
    </div>
    <div class="subscriptions-sms">
      <p class="subscriptions-title">Poslovi na SMS</p>
      <p class="subscriptions-subtitle">SMS obavestenja o konkursima</p>
      <div class="form-group">
        <input
          type="email"
          class="form-control search-bar-input"
          id="subscription-sms"
          aria-describedby="subscription-sms"
          placeholder="Prijavi se za SMS obavestenja"
        />
      </div>
      <button class="button button-cta-blue">Prijavi se</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Subscription',

  data: () => ({}),
};
</script>
