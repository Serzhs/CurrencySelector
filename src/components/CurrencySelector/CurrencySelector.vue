<template>
  <div :class="styles.container">
    <div :class="styles.selectedItemsWrapper">
      <div
        v-for="{ name } in selectedCurrencies"
        :key="`selected-${name}`"
        :class="styles.itemWrapper"
      >
        <div :class="styles.selectedItem">
          <span testID="selectedCurrencies">
            {{ name }}
          </span>
          <span
            @click="removeSelectedCurrency(name)"
            :class="styles.selectedItemClose"
            testID="selectedCurrenciesRemove"
          >
            x
          </span>
        </div>
      </div>
    </div>
    <div :class="styles.itemsWrapper">
      <label
        v-for="({ name, selected }, i) in currencies"
        :key="name"
        :for="name"
        :class="styles.itemWrapper"
        testID="currencies"
      >
        <span :class="[styles.item, selected && styles.itemSelected]">
          <input
            type="checkbox"
            :id="name"
            v-model="currencies[i].selected"
            hidden
            :class="styles.itemCheckboxInput"
          />
          <span :class="styles.itemCheckbox" />
          {{ name }}
        </span>
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import styles from "./CurrencySelector.scss";

type CurrencyNames =
  | "EUR"
  | "PLN"
  | "GEL"
  | "DKK"
  | "CZK"
  | "GBP"
  | "SEK"
  | "USD"
  | "RUB";

type Currency = {
  name: CurrencyNames;
  selected: boolean;
};

declare interface BaseComponentData {
  styles: { [className: string]: string };
  currencies: Currency[];
}

export default Vue.extend({
  name: "CurrencySelector",
  data(): BaseComponentData {
    return {
      styles: styles,
      currencies: [
        {
          name: "EUR",
          selected: false
        },
        {
          name: "PLN",
          selected: false
        },
        {
          name: "GEL",
          selected: false
        },
        {
          name: "DKK",
          selected: false
        },
        {
          name: "CZK",
          selected: false
        },
        {
          name: "GBP",
          selected: false
        },
        {
          name: "SEK",
          selected: false
        },
        {
          name: "USD",
          selected: false
        },
        {
          name: "RUB",
          selected: false
        }
      ]
    };
  },
  computed: {
    selectedCurrencies(): Currency[] {
      return this.currencies.filter(({ selected }) => selected);
    }
  },
  methods: {
    removeSelectedCurrency(currencyName: CurrencyNames) {
      const currencyToUnselectIndex = this.currencies.findIndex(
        ({ name }) => name === currencyName
      );

      const newCurrencyValue: Currency = {
        name: currencyName,
        selected: false
      };

      this.$set(this.currencies, currencyToUnselectIndex, newCurrencyValue);
    }
  }
});
</script>
