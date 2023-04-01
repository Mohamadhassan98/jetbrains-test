<template>
  <div>
    <!--  click emitter is defined as (event: "click", e: MouseEvent | KeyboardEvent) => void, but here it's recognized as MouseEvent | KeyboardEvent  -->
    <v-list-item @click="clickTest" />
    <!--  Yet optional prop cannot be undefined, but no 'Missing required attribute' warned  -->
    <v-list-item :variant="undefined" />
    <v-btn :disabled="currentFilteredBill?.ForceCancel">
      {{
        currentFilteredBill?.ForceCancel ? 'لغو شده' : 'لغو اجباری صورت‌حساب'
      }}
    </v-btn>
    <v-btn :disabled="currentFilteredBill2?.ForceCancel">
      {{
        currentFilteredBill2?.ForceCancel ? 'لغو شده' : 'لغو اجباری صورت‌حساب'
      }}
    </v-btn>
    <!--  disabled is optional, but undefined yields error here  -->
    <v-btn :disabled="currentFiltered?.ForceCancel">
      {{ currentFiltered?.ForceCancel ? 'لغو شده' : 'لغو اجباری صورت‌حساب' }}
    </v-btn>
    <v-btn :disabled="currentFiltered2?.ForceCancel">
      {{ currentFiltered2?.ForceCancel ? 'لغو شده' : 'لغو اجباری صورت‌حساب' }}
    </v-btn>
    <!--  optional prop works here, but emit doesn't  -->
    <TestComponent
      :is-optional="computedOptional"
      @custom="val => alert(val)"
    />
    <!--  Both works with explicit import  -->
    <TestComponentWithExplicitImport
      :is-optional="computedOptional"
      @custom="val => alert(val)"
    />
    <!--  But for component library, imported component yields to any, no prop/emit suggestion, no type checking, nothing  -->
    <VListItemExplicit :variant="undefined" />
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { $ } from 'vue/macros';
import TestComponentWithExplicitImport from '@components/TestComponent.vue';
import { VListItem as VListItemExplicit } from 'vuetify/components';

const testStore = useTestStore();
// with default pinia store definition, it's even worse, yields to any, or unknown
const { currentFilteredBill } = $(storeToRefs(testStore));
const { currentFilteredBill2 } = storeToRefs(testStore);

const testClassStore = useTestClassStore();
const { currentFiltered } = storeToRefs(testClassStore);
const { currentFiltered2 } = $(storeToRefs(testClassStore));

const computedOptional = computed<boolean | undefined>(() => true);

function clickTest() {
  console.log('Body not matters');
  // but all the typing problems work in script correctly
  console.log(currentFilteredBill?.ForceCancel);
  console.log(currentFilteredBill2.value?.ForceCancel);
  console.log(currentFiltered.value?.ForceCancel);
  console.log(currentFiltered2?.ForceCancel);
}
</script>
