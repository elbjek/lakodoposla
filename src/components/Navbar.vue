<template>
  <div class="border-bottom-white">
    <nav class="navbar navbar-expand-lg navbar-light container">
      <a class="navbar-brand" href="/">Do</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/"
              >Glavna <span class="sr-only">(current)</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about"
              >Pitanja i odgovori</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">Saveti</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">Kontakt</router-link>
          </li>
        </ul>
        <ul class="navbar-nav mr-0">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Trazis posao?
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="button button-cta-blue" href="/poslodavci">Poslodavci</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',

  data: () => ({}),
};
</script>
