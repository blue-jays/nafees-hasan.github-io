# Credit Card Fraud Pattern Analysis: Uncovering High-Risk Transaction Behaviors

## Executive Summary
**Objective**  
This project analyzes historical credit card transaction data to uncover high-risk fraud patterns and help financial institutions implement targeted prevention strategies before losses occur.

**Approach**  
Over 99,000 transactions are examined, comparing fraudulent and legitimate activities across multiple dimensions:
- Transaction timing
- Transaction amounts
- Channels (online, POS, ATM)
- Merchant categories
- Geographic patterns
- Customer demographics

Machine learning techniques (including a Random Forest classifier) are used to identify the most predictive fraud indicators.

**Key Finding**  
Fraudsters predominantly target **small-value online transactions (≤ £35) during early morning hours (midnight–7 a.m.)**:
- **52% of fraudulent transactions occur before or at 7 a.m.**
- **79% of fraudulent transactions involve amounts below £35**

These insights enable precision-targeted controls on high-risk transaction segments while minimizing disruption to legitimate customers.

## Key Findings
1. **Temporal Fraud Concentration**  
   - 52% of fraudulent transactions occur between midnight and 7 a.m.  
   - Only 3.7% of legitimate transactions occur during this window.

2. **Low-Value Transaction Targeting**  
   - 79% of fraudulent transactions are ≤ £35.  
   - Fraudsters prefer small amounts to evade traditional high-value monitoring thresholds.

3. **Channel-Specific Risk Profiles**  
   - Online channels account for 44% of fraudulent activity.  
   - POS transactions: 32% of fraud.  
   - ATM transactions: 23% of fraud.

4. **Merchant Category Vulnerabilities**  
   - Children’s products, electronics, and fashion merchants show elevated fraud exposure.

5. **Geographic & Institutional Patterns**  
   - Fraud spans multiple countries (India, USA, China, Russia, UK), with 98% of cardholders being UK residents.

## Methodology
- Data cleaning and preparation (missing values, currency standardization, temporal feature engineering).
- Exploratory pattern analysis across time, amount, channel, merchant category, geography, and demographics.
- Predictive modeling using Random Forest to validate and quantify the importance of fraud indicators.

All analysis, visualizations, and model code are implemented in a Jupyter notebook (`test.ipynb`).
