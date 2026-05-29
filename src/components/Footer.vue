<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-left">
        <strong>Rebecca Raye Counselling</strong>
        <div class="footer-sub">All parts of you are welcome.</div>
        <a
          href="https://www.bacp.co.uk/media/3103/bacp-ethical-framework-for-the-counselling-professions-2018.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="ethical-framework-link"
        >
          BACP Ethical Framework
        </a>
      </div>
      <div class="footer-center">
        <div class="accreditation-logos">
          <a
            href="https://www.bacp.co.uk/media/3103/bacp-ethical-framework-for-the-counselling-professions-2018.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="accreditation-link"
          >
            <img
              src="/src/assets/BACP_Logo.png"
              alt="BACP"
              class="accreditation-logo"
            />
          </a>
          <img
            src="/src/assets/ptuk_logo.png"
            alt="Play Therapy International"
            class="accreditation-logo ptuk-logo"
          />
        </div>
      </div>
      <div class="footer-right">
        <div class="footer-email">rebecca.raye.counselling@gmail.com</div>
        <router-link to="/contact" class="booking-link"
          >Book a free 15 minute consultation</router-link
        >
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

.accreditation-logos {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
}

.accreditation-link {
  display: inline-block;
  transition: opacity 0.2s;
}

.accreditation-link:hover {
  opacity: 0.75;
}

.accreditation-logo {
  height: 70px;
  width: auto;
  object-fit: contain;
}

.ptuk-logo {
  height: 100px;
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
  margin-top: 8px;
}

.ethical-framework-link:hover {
  color: var(--accent);
}

.booking-link {
  color: inherit;
  text-decoration: none;
  font-weight: 600;
  font-size: 12px;
  border-bottom: 3px solid var(--accent);
  transition: all 0.2s;
  padding-bottom: 4px;
  display: inline-block;
}

.booking-link:hover {
  color: var(--accent);
}

@media (max-width: 1024px) {
  .accreditation-logo {
    height: 50px;
  }

  .ptuk-logo {
    height: 70px;
  }
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

  .accreditation-logo {
    height: 60px;
  }

  .ptuk-logo {
    height: 80px;
  }

  .accreditation-logos {
    gap: 16px;
  }

  .ethical-framework-link {
    font-size: 12px;
  }
}
</style>
