<template>
  <section class="section">
    <h2 class="services-title">Services & Age Groups</h2>
    <p class="services-desc">
      Overview of the main areas I work with—split by age group for clarity.
    </p>

    <div class="services-wrap">
      <AgeGroup
        title="Children (Ages 5–12)"
        image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80"
      >
        <ul>
          <li>Separation anxiety and school refusal</li>
          <li>Behavioural challenges (anger, oppositional)</li>
          <li>Low self-esteem or confidence issues</li>
          <li>Nightmares and sleep disturbances</li>
          <li>Selective mutism or extreme shyness</li>
        </ul>
      </AgeGroup>

      <div class="spacer"></div>

      <AgeGroup
        title="Teens & Adolescents (Ages 13–19)"
        image="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80"
      >
        <ul>
          <li>Anxiety, low mood and self-harm ideation</li>
          <li>Social and peer relationship challenges</li>
          <li>Trauma-related difficulties and regulation</li>
          <li>School-related stress and transitions</li>
        </ul>
      </AgeGroup>

      <div class="spacer"></div>

      <AgeGroup
        title="Adults & Young Adults (Ages 20+)"
        image="https://images.unsplash.com/photo-1545996124-1b7f95b7f3b1?auto=format&fit=crop&w=600&q=80"
      >
        <ul>
          <li>Anxiety, depression and relational difficulties</li>
          <li>Trauma-informed therapy and nervous system regulation</li>
          <li>Family, parenting and couple work</li>
          <li>Support for chronic or medical conditions</li>
        </ul>
      </AgeGroup>
    </div>
  </section>
</template>

<script setup>
import AgeGroup from "../components/AgeGroup.vue";
</script>

<style scoped>
.services-title {
  font-family: "Playfair Display", serif;
}
.services-desc {
  color: var(--muted);
}
.services-wrap {
  margin-top: 28px;
}
.spacer {
  height: 28px;
}
</style>
