import React from 'react'

const Faq = () => {
  return (
    <div
          className="faq-main"
          style={{ textAlign: "left" }}
        >
          <h5
            className="faq-que"
            style={{ fontSize: "30px", fontWeight: "700" }}
          >
            Frequently Asked Questions
          </h5>
          <div className="faq-main-div">
            <h5
              className="faq-que"
              style={{ fontSize: "20px", fontWeight: "700" }}
            >
              1. How are cryptocurrencies taxed in Australia?
            </h5>
            <div>
              <p
                className="faq-ans"
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#3E424A",
                }}
              >
                The Australian Taxation Office (ATO) regards cryptocurrency as
                both property, which is subject to Capital Gains Tax (CGT), and
                income, which is subject to Income Tax. CGT applies when you
                sell, trade, gift, or make purchases using cryptocurrency. On
                the other hand, Income Tax applies when you receive
                cryptocurrency as payment for services, work, mining, staking,
                or other activities. To simplify tax calculations, consider
                using a free crypto tax calculator for Australia.
              </p>
            </div>
            <hr></hr>
            <div>
              <p
                className="faq-ans"
                style={{ fontSize: "20px", fontWeight: "700" }}
              >
                2. What’s the difference between long-term and short-term
                capital gains?
              </p>
              <span>
                <p
                  className="faq-ans-bold"
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#3E424A",
                  }}
                >
                  The distinction between long-term and short-term capital gains
                  lies in the duration of ownership. When you own an asset, such
                  as cryptocurrency, for more than 12 months, any gains from its
                  sale are categorised as long-term. These long-term gains often
                  receive a 50% discount on the capital gains tax (CGT). In
                  contrast, if you hold the asset for 12 months or less, the
                  gains are considered short-term, and they are taxed at your
                  regular income tax rate.
                </p>
              </span>
            </div>
          </div>
          <hr></hr>

          <div className="faq-main-div">
            <h5
              className="faq-que"
              style={{ fontSize: "20px", fontWeight: "700" }}
            >
              3. Do I have to pay tax on crypto-to-crypto transactions?
            </h5>
            <div>
              <p
                className="faq-ans"
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#3E424A",
                }}
              >
                Yes, according to the ATO, when you trade one cryptocurrency for
                another, like NFTs, stablecoins, or tokens, it's seen as selling
                one asset to buy another, and any profit you make from this
                exchange is subject to Capital Gains Tax. To compute taxes for
                crypto-to-crypto transactions, you must determine the fair
                market value of your coins in AUD at both the acquisition and
                disposal times. However, this can be challenging because many
                exchanges use cryptocurrency as the standard for valuation.
              </p>
              <br></br>
              <p
                className="faq-ans"
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#3E424A",
                }}
              >
                Explore KoinX for a streamlined experience in calculating your
                cryptocurrency taxes. Our historical price engine swiftly
                delivers the fair market value of your crypto holdings at the
                time of each transaction, making tax assessment hassle-free.
              </p>
            </div>
            <hr></hr>

            <div>
              <p
                className="faq-ans"
                style={{ fontSize: "20px", fontWeight: "700" }}
              >
                4. How do I lower my cryptocurrency taxes?
              </p>
            </div>
            <div>
              <p
                className="faq-ans"
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#3E424A",
                }}
              >
                Here are the top 6 strategies for lowering your cryptocurrency
                taxes in Australia:
              </p>
            </div>

            <div
              style={{ fontSize: "16px", fontWeight: "500", color: "#3E424A" }}
            >
              <div className="faq-point-div">
                <p className="faq-subpoint-div">
                  <li>
                    <span style={{ fontWeight: "bold", color: "black" }}>
                      Hold for over 12 months-
                    </span>{" "}
                    Hold your crypto for more than 12 months to qualify for a
                    50% long-term CGT discount to reduce your tax liability.
                  </li>
                </p>
                <p className="faq-subpoint-div">
                  <li>
                    <span style={{ fontWeight: "bold", color: "black" }}>
                      Offset gains with losses-
                    </span>{" "}
                    Offset capital gains with capital losses from
                    cryptocurrency, reducing your overall tax burden.
                  </li>
                </p>
                <p className="faq-subpoint-div">
                  <li>
                    <span style={{ fontWeight: "bold", color: "black" }}>
                      Claim tax deductions-
                    </span>{" "}
                    Explore opportunities to claim significant deductions on
                    your regular income if you're a trader or running a crypto
                    business.
                  </li>
                </p>
                <p className="faq-subpoint-div">
                  <li>
                    <span style={{ fontWeight: "bold", color: "black" }}>
                      Use crypto tax tools-
                    </span>{" "}
                    Employ crypto tax software like KoinX or seek help from a
                    crypto tax specialist to streamline calculations and ensure
                    compliance.
                  </li>
                </p>

                <p className="faq-subpoint-div">
                  <li>
                    <span style={{ fontWeight: "bold", color: "black" }}>
                      Donate to charities-
                    </span>{" "}
                    Donate cryptocurrency to registered charities since it’s not
                    a taxable event, and claim deductions on the donated amount.
                  </li>
                </p>

                <p className="faq-subpoint-div">
                  <li>
                    <span style={{ fontWeight: "bold", color: "black" }}>
                      Full disclosure-
                    </span>{" "}
                    Be transparent and disclose all your crypto transactions to
                    the ATO to avoid penalties for hiding trading activities.
                  </li>
                </p>
              </div>
            </div>
            <hr></hr>

            <div>
              <p
                className="faq-ans"
                style={{ fontSize: "20px", fontWeight: "700" }}
              >
                5. Can the ATO track crypto?
              </p>
              <span>
                <p
                  className="faq-ans-bold"
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#3E424A",
                  }}
                >
                  The Australian Taxation Office (ATO) possesses strong tracking
                  capabilities for cryptocurrency transactions. Since 2014,
                  they've been gathering data on crypto activities, including
                  KYC info from exchanges and wallets. The ATO's data matching
                  program, active since 2019, lets them access data from service
                  providers like Binance and CoinJar, covering personal details
                  and transaction specifics. Since 2020, the ATO has been
                  notifying Australian crypto investors to report holdings to
                  avoid penalties.
                </p>
              </span>
            </div>
            <hr></hr>

            <div>
              <p
                className="faq-ans"
                style={{ fontSize: "20px", fontWeight: "700" }}
              >
                6. What is the best crypto tax calculator for Australia?
              </p>
              <span>
                <p
                  className="faq-ans-bold"
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#3E424A",
                  }}
                >
                  KoinX is a crypto tax platform that makes it easy to calculate
                  tax on crypto transactions. It also provides portfolio
                  insights of all crypto exchange accounts combined, making it a
                  valuable tool for chartered accountants and VDA Investors
                  alike.
                </p>
              </span>
            </div>
            <hr></hr>

            <div>
              <p
                className="faq-ans"
                style={{ fontSize: "20px", fontWeight: "700" }}
              >
                7. Do I have to pay tax if I lose money trading crypto?
              </p>
              <span>
                <p
                  className="faq-ans-bold"
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#3E424A",
                  }}
                >
                  In Australia, when your cryptocurrency loses value, it's
                  classified as a capital loss. This means you won't have to pay
                  taxes on that loss. It's a way to offset any gains you might
                  have made in other investments for tax purposes.
                </p>
              </span>
            </div>
            <hr></hr>

            <div>
              <p
                className="faq-ans"
                style={{ fontSize: "20px", fontWeight: "700" }}
              >
                8. Is using a crypto tax calculator safe?
              </p>
              <span>
                <p
                  className="faq-ans-bold"
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#3E424A",
                  }}
                >
                  KoinX provides a reliable crypto tax calculator that can
                  assist you in determining your tax obligations for
                  cryptocurrency transactions. This tool accurately tracks your
                  portfolio on your preferred exchange and computes your gains
                  or losses based on the crypto amounts and prices involved.
                </p>
              </span>
            </div>
            <hr></hr>

            <div>
              <p
                className="faq-ans"
                style={{ fontSize: "20px", fontWeight: "700" }}
              >
                9. Which exchanges do you support?
              </p>
              <span>
                <p
                  className="faq-ans-bold"
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#3E424A",
                  }}
                >
                  KoinX seamlessly integrates with a wide array of exchanges,
                  including Binance, CoinSpot, MEXC, Bybit, Coinbase, Kraken,
                  and numerous others. It effortlessly consolidates
                  cryptocurrency transactions from over 180+ chains, exchanges,
                  and wallets, presenting them in a user-friendly unified
                  dashboard.
                </p>
              </span>
            </div>
            <hr></hr>

            <div>
              <p
                className="faq-ans"
                style={{ fontSize: "20px", fontWeight: "700" }}
              >
                10. Do I have to pay tax if I transfer crypto from one wallet to
                another?
              </p>
              <span>
                <p
                  className="faq-ans-bold"
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#3E424A",
                  }}
                >
                  Transferring cryptocurrency from one wallet to another that
                  you own in Australia is not subject to tax, as it is not
                  recognised as a taxable event, and capital gains tax is not
                  triggered. Nevertheless, it's essential to keep detailed
                  records of these transfers, particularly if you are utilising
                  automated crypto tax software like KoinX. KoinX, as a reliable
                  crypto tax software, can streamline the process, making it
                  easier to maintain accurate and efficient tax records and
                  reporting while ensuring compliance with Australian tax
                  regulations.
                </p>
              </span>
            </div>
            <hr></hr>

            <div>
              <p
                className="faq-ans"
                style={{ fontSize: "20px", fontWeight: "700" }}
              >
                11. How do I lower my cryptocurrency taxes?
              </p>
            </div>
            <div>
              <p
                className="faq-ans"
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#3E424A",
                }}
              >
                In order to use a cryptocurrency tax calculator, you need to
                input information about your cryptocurrency transactions.
              </p>
            </div>
            <div>
              <p
                className="faq-ans"
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#3E424A",
                }}
              >
                After you enter your information, the cryptocurrency tax
                calculator will calculate the gain or loss on every transaction.
              </p>
            </div>
            <div
              style={{ fontSize: "16px", fontWeight: "500", color: "#3E424A" }}
            >
              <p className="faq-ans">
                This includes:
              </p>
              <div className="faq-point-div">
                <p className="faq-subpoint-div">
                  1. The financial year you want to calculate your taxes for.
                </p>
                <p className="faq-subpoint-div">
                  2. The country you want to calculate your taxes for.
                </p>
                <p className="faq-subpoint-div">
                  3. The purchase price of the coin.
                </p>
                <p className="faq-subpoint-div">
                  4. The sale price of the coin.
                </p>
              </div>
            </div>

            <div
              style={{ fontSize: "16px", fontWeight: "500", color: "#3E424A" }}
            >
              <p className="faq-ans">
                You will get results that mention the following:
              </p>
              <div className="faq-point-div">
                <p className="faq-subpoint-div">
                  1. The total profit/loss you made
                </p>
                <p className="faq-subpoint-div">
                  2. The tax you’re liable to pay
                </p>
              </div>
            </div>
            <br></br>
            <div className="faq-span">
              <span>Still have doubts? </span>
              <a href="#" >
                Consult with a crypto taxation expert
              </a>
            </div>
          </div>
          <div className="faq-main-div">
            <h5
              className="faq-que"
              style={{ fontSize: "20px", fontWeight: "700" }}
            >
              12. How do I accurately calculate my tax liability Australia?
            </h5>
            <div>
              <p
                className="faq-ans-bold"
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#3E424A",
                }}
              >
                To calculate your crypto tax in Australia accurately, you need
                to consider both income tax and capital gains tax.
              </p>
            </div>
            <div>
              <p
                className="faq-ans-bold"
                style={{ fontSize: "16px", fontWeight: "700" }}
              >
                Income Tax
              </p>
              <p
                className="faq-ans-bold"
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#3E424A",
                }}
              >
                In Australia, when an individual (investor) sells, trades,
                spends, earns (salary, mining, interest) or gifts
                cryptocurrency, the net capital gain is taxed at the same rate
                as their Income Tax.This tax rate is determined based on their
                total income for the tax year.
              </p>
            </div>

            <div>
              <p className="faq-ans-bold">
                ATO Individual Income Tax Rates 2022–2023
              </p>

              <table>
                <tr>
                  <th>Column 1 Header</th>
                  <th>Column 2 Header</th>
                </tr>
                <tr>
                  <td>Row 1, Column 1</td>
                  <td>Row 1, Column 2</td>
                </tr>
                <tr>
                  <td>Row 2, Column 1</td>
                  <td>Row 2, Column 2</td>
                </tr>
                <tr>
                  <td>Row 3, Column 1</td>
                  <td>Row 3, Column 2</td>
                </tr>
                <tr>
                  <td>Row 4, Column 1</td>
                  <td>Row 4, Column 2</td>
                </tr>
                <tr>
                  <td>Row 5, Column 1</td>
                  <td>Row 5, Column 2</td>
                </tr>
                <tr>
                  <td>Row 6, Column 1</td>
                  <td>Row 6, Column 2</td>
                </tr>
              </table>
            </div>
            <div>
              <p className="faq-ans-bold">
                Capital Gains Tax (CGT)
              </p>
              <span>
                <p className="faq-ans">
                  Calculate your capital gains or losses on cryptocurrency
                  transactions using this formula:
                </p>
              </span>
            </div>
            <div>
              <p className="faq-ans-bold">
                 Capital Gain/Loss = Capital Proceeds - Cost Basis 
              </p>

              <br></br>
              <p className="faq-ans-bold">Note: </p>
              <p className="faq-ans-bold">
                 Capital Proceeds (sale value or any form of receipt) 
              </p>

              <p className="faq-ans-bold">
                 Cost Basis (costs incurred to acquire, hold, and dispose of the
                asset) 
              </p>
              <br></br>
              <p className="faq-ans">
                Your tax rate depends on whether you held the cryptocurrency for
                more than 12 months (long-term) or less (short-term). Long-term
                gains receive a 50% discount
              </p>
              <br></br>
              <p className="faq-ans">
                Calculate your Australian crypto taxes accurately and
                effortlessly with KoinX's free crypto tax calculator for
                Australia. It simplifies the process, ensuring compliance with
                the latest tax rates and regulations making crypto tax
                calculations easy and precise.
              </p>
            </div>
          </div>
        </div>
  )
}

export default Faq
