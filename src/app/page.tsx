"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import PriceCard from "./components/PriceCard/PriceCard";
import Card from "./components/Card";
import { getBTCPrice } from "./api";
import styles from "./page.module.scss";
import { BPIData } from "./types";

interface HomeState {
  data: BPIData | null;
  refreshInterval: number;
  loading: boolean;
}

export default function Home() {
  const [state, setState] = useState<HomeState>({
    data: null,
    refreshInterval: 50000,
    loading: true,
  });

  const handleStateChange = (newState: Partial<HomeState>) => {
    setState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  const fetchData = useCallback(async () => {
    const data = await getBTCPrice();
    data && handleStateChange({ data, loading: false });
  }, []);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, state.refreshInterval);
    return () => clearInterval(interval);
  }, [fetchData, state.refreshInterval]);

  return (
    <section className={styles.Page}>
      <h1>Bitcoin Price</h1>
     
      {state.data?.disclaimer && (
        <>
          <p>Last updated : {state.data.time.updated}</p>
          <p>
            <Image src="info.svg" alt="Info Icon" width="15" height="15" />
            {state.data.disclaimer}
            <br />
          </p>
        </>
      )}
      {state.loading && (
        <div className={styles.Page__content}>
         { Array(3).fill(0).map((_, i) => <Card key={i}></Card>)}
        </div>
      )}
      <div className={styles.Page__content}>
        {state.data?.bpi?.USD && (
          <PriceCard
            icon={`${state.data!.bpi!.USD.code.toLowerCase()}.svg`}
            currency={state.data!.bpi!.USD}
            price={state.data!.bpi!.USD.rate}
          />
        )}

        {state.data?.bpi?.GBP && (
          <PriceCard
            icon={`${state.data!.bpi!.GBP.code.toLowerCase()}.svg`}
            currency={state.data!.bpi!.GBP}
            price={state.data!.bpi!.GBP.rate}
          />
        )}

        {state.data?.bpi?.EUR && (
          <PriceCard
            icon={`${state.data!.bpi!.EUR.code.toLowerCase()}.svg`}
            currency={state.data!.bpi!.EUR}
            price={state.data!.bpi!.EUR.rate}
          />
        )}
      </div>
    </section>
  );
}
