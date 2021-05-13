<template>
  <div class="container">
    <div class="filters">
      <form action="">
        <div class="form-group">
            <p>Senioritet</p>
            <div class="form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                />
                <label class="form-check-label" for="flexCheckChecked">
                    Bez iskustva
                </label>
            </div>
            <div class="form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                />
                <label class="form-check-label" for="flexCheckChecked">
                    Junior
                </label>
            </div>
            <div class="form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                />
                <label class="form-check-label" for="flexCheckChecked">
                    Senior
                </label>
            </div>
            <div class="form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    />
                <label class="form-check-label" for="flexCheckChecked">
                    Studenti
                </label>
            </div>
        </div>
        <div class="form-group">
            <p>Izlistaj po datumu postavljanja</p>
            <input
                class="form-control"
                type="date"
                value=""
                id="flexCheckChecked"
                placeholder="Postavljeno danas"
            />
        </div>
        <div class="form-group">
            <p>Poslodavac</p>
            <input
                class="form-control"
                type="search"
                value=""
                id="flexCheckChecked"
                placeholder="Trazi.."
            />
        </div>
        <button type="submit" class="button button-cta-blue">Potvrdi</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({}),
};
</script>
