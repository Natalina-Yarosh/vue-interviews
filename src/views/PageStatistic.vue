<script setup lang="ts">
import { ref, onMounted } from 'vue';
import {
  getFirestore,
  collection,
  query,
  orderBy,
  getDocs,
} from 'firebase/firestore';
import { useUserStore } from '@/stores/user';
import type { IInterview } from '@/interfaces.ts';

import Chart from 'primevue/chart';

const userStore = useUserStore()
 const db = getFirestore()
 const interviews = ref<IInterview[]>([])
 const chartData = ref()
 const chartOptions = ref()

onMounted(async () => {
  interviews.value = await getAllInterviews();
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});

const getAllInterviews = async <T extends IInterview>(): Promise<T[]> => {
  const getData = query(
    collection(db, `users/${userStore.userId}/interviews`),
    orderBy('createdAt', 'desc')
  );
  const listDocs = await getDocs(getData);

  return listDocs.docs.map((doc) => doc.data() as T);
};

const setChartData = () => {
  const documentStyle = getComputedStyle(document.body);
  const data: number[] = [0, 0, 0];
  interviews.value.forEach((interview: IInterview) => {
    if (interview.result === 'Offer') {
      data[0]++;
    } else if (interview.result === 'Refusal') {
      data[1]++;
    } else {
      data[2]++;
    }
  });

  return {
    labels: ['Оффер', 'Отказ', 'В процессе'],
    datasets: [
      {
        data,
        backgroundColor: [
          documentStyle.getPropertyValue('--p-teal-900'),
          documentStyle.getPropertyValue('--p-red-700'),
          documentStyle.getPropertyValue('--p-slate-500'),
        ],
        hoverBackgroundColor: [
          documentStyle.getPropertyValue('--p-teal-700'),
          documentStyle.getPropertyValue('--p-red-500'),
          documentStyle.getPropertyValue('--p-slate-300'),
        ],
      },
    ],
  };
};

const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--p-text-color');

  return {
    plugins: {
      legend: {
        labels: {
          cutout: '60%',
          color: textColor,
        },
      },
    },
  };
};
</script>

<template>
  <h1>Статистика</h1>
  <div class="card flex justify-content-center " >
    <Chart
      type="doughnut"
      :data="chartData"
      :options="chartOptions"
      class="w-[100rem] md:w-[30rem]"
    />
  </div>
</template>
