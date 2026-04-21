<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-left">
        <strong>Rebecca Raye Counselling</strong>
        <div class="footer-sub">All parts of you are welcome.</div>
      </div>
      <div class="footer-center">
        <a
          href="https://www.bacp.co.uk/media/3103/bacp-ethical-framework-for-the-counselling-professions-2018.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="bacp-link"
        >
          <img src="/src/assets/BACP_Logo.png" alt="BACP" class="bacp-logo" />
        </a>
      </div>
      <div class="footer-right">
        <div class="footer-email">hello@example.com</div>
        <a
          href="https://www.bacp.co.uk/media/3103/bacp-ethical-framework-for-the-counselling-professions-2018.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="ethical-framework-link"
        >
          BACP Ethical Framework
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  width: 100%;
}

.footer-left {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.footer-sub {
  font-size: 13px;
}

.footer-email {
  font-size: 13px;
  margin-bottom: 12px;
}

.footer-center {
  flex: 1;
  text-align: center;
}

.bacp-link {
  display: inline-block;
  transition: opacity 0.2s;
}

.bacp-link:hover {
  opacity: 0.75;
}

.bacp-logo {
  height: 70px;
  width: auto;
  object-fit: contain;
}

.footer-right {
  text-align: right;
}

.ethical-framework-link {
  color: inherit;
  text-decoration: none;
  font-weight: 600;
  font-size: 12px;
  border-bottom: 3px solid var(--accent);
  transition: all 0.2s;
  padding-bottom: 4px;
  display: inline-block;
}

.ethical-framework-link:hover {
  color: var(--accent);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .footer-inner {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
  }

  .footer-left {
    align-items: center;
  }

  .footer-right {
    text-align: center;
  }

  .bacp-logo {
    height: 60px;
  }

  .ethical-framework-link {
    font-size: 12px;
  }
}
</style>
