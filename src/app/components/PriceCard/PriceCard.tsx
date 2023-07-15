import Image from "next/image";

import { Currency, CurrencyType } from "@/app/types";
import { CURRENCY_SYMBOLS } from "@/app/data";
import Card from "@/app/components/Card";

import styles from "./PriceCard.module.scss";

type PriceCardProps = {
  icon: string;
  currency: Partial<Currency>;
  price: string;
};



export default function PriceCard({ icon, currency, price }: PriceCardProps) {
  const [numeric, decimal] = price.split(".");
  return (
    <Card>
      <div className={styles.PriceCard}>
        <div className={styles.PriceCard__label}>
          <Image
            src={icon}
            alt={`${currency.code} Icon`}
            width="24"
            height="24"
          />
          <span className={styles.PriceCard__label__code}>{currency.code}</span>{" "}
          &#9679; <span>{currency.description}</span>
        </div>
        <div className={styles.PriceCard__price}>
          <span className={styles.PriceCard__price__numeric}>
            {CURRENCY_SYMBOLS[currency?.code || CurrencyType.USD]  } {numeric}
            {!!decimal ? "." : ""}
          </span>
          <span>{decimal}</span>
        </div>
      </div>
    </Card>
  );
}
