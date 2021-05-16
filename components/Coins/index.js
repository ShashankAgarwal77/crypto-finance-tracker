import styles from './Coins.module.css';

const Coins = ({
  name,
  price,
  symbol,
  marketcap,
  // volume,
  image,
  priceChange,
  id,
}) => {
  return (
    <div className={styles.coin_container}>
      <div className={styles.coin_row}>
        <div className={styles.coin}>
          <img src={image} alt={name} className={styles.coin_img} />
          <h1 className={styles.coin_h1}>{name}</h1>
          <div className={styles.coin_symbol}>{symbol}</div>
        </div>
        <div className={styles.coin_data}>
          <p className={styles.coin_price}>₹{price.toLocaleString()}</p>
          {/* <p className='coin_vol'>₹{volume}</p> */}
          {priceChange < 0 ? (
            <p className={(styles.coin_percentage, styles.red)}>
              {priceChange.toFixed(2)} %
            </p>
          ) : (
            <p className={(styles.coin_percentage, styles.green)}>
              {priceChange.toFixed(2)} %
            </p>
          )}

          <p className={styles.coin_marketcap}>
            Mkt Cap: ₹{marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coins;
