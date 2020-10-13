import { shallowMount } from "@vue/test-utils";
import CurrencySelector from "@/components/CurrencySelector/CurrencySelector";

describe("CurrencySelector.vue", () => {
  it("Check if exists", () => {
    const component = shallowMount(CurrencySelector);
    expect(component.vm).toBeTruthy();
  });
  it("Matches snapshot", () => {
    const component = shallowMount(CurrencySelector);
    expect(component.element).toMatchSnapshot();
  });
});
