import React, {useEffect, useState} from "react";
import {BinanceOneCryptoPairData} from "../../types/crypto-data";
import {CryptoPriceOfOnePair} from "./CryptoPriceOfOnePair";

export const CryptoPrice = () => {
    const [data, setData] = useState<BinanceOneCryptoPairData[] | null>(null);
    const [pair, setPair] = useState<string>('');

    useEffect(() => {
        (async () => {

            const result = await fetch('https://api2.binance.com/api/v3/ticker/24hr');

            setData(await result.json());

        })();
    }, []);

    if (data === null) {
       return <p>Wczytywanie danych...</p>
    }

    return <>
        <label>
            Wybierz parę cryptowalutową:

            <br/>

            <select
                value={pair}
                onChange={e => setPair(e.target.value)}
            >
                {
                    data
                        .map(pair => (
                            <option
                                value={pair.symbol}
                                key={pair.symbol}
                            >
                                {pair.symbol}
                            </option>
                        ))
                }
            </select>
        </label>
        {
            pair && <CryptoPriceOfOnePair
                onePair={data.find(one => one.symbol === pair) as BinanceOneCryptoPairData}
            />
        }
        </>;
}
