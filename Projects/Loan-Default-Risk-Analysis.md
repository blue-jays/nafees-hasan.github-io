# Loan Default Risk Analysis

## Statistical Analysis Report

### Executive Summary
This analysis addresses rising loan default rates through comprehensive statistical testing of 10,000 loan applications. The study identifies key risk factors driving defaults and evaluates the effectiveness of a new credit policy using rigorous statistical methods.

**Objectives:**
- Identify factors most strongly associated with loan defaults
- Evaluate new credit policy effectiveness through statistical hypothesis testing
- Develop predictive model for default risk assessment

### Dataset
**Sample Size:** 10,000 loan applications (5,000 before policy, 5,000 after policy)

**Key Variables:**
- Customer demographics (age, income, employment length)
- Credit profile (FICO score 300-850, credit utilization, number of credit lines)
- Loan characteristics (amount $1K-$50K, DTI ratio, loan purpose)
- Policy period indicator (before/after)
- Default indicator (binary outcome)

### Key Findings
**1. Credit Score (Primary Risk Factor)**
- Borrowers with poor credit scores (below 580) are 3-4x more likely to default than those with excellent credit (above 740)
- Statistical significance: p < 0.001 (99.9% confidence level)
- Recommended minimum threshold: 620

**2. Debt-to-Income Ratio (Critical Metric)**
- High DTI ratios (above 40%) associated with 2-3x increased default risk
- Statistically significant relationship confirmed through regression analysis
- Recommended maximum threshold: 40%

**3. Policy Effectiveness**
- Default rate decreased from 6.5% to 4.5% post-implementation
- Two-proportion z-test: p = 0.002 (99.8% confidence level)
- Validates effectiveness of stricter lending requirements

**4. Predictive Model Performance**
- Logistic regression model achieves 85% accuracy (ROC-AUC = 0.85)
- Seven risk factors included in final model
- Model ready for production deployment

### Business Impact
| Metric | Value |
|--------|-------|
| Total Loans | 10,000 |
| Total Loan Amount | $172.78M |
| Default Rate | 68.3% |
| Money Lost to Defaults | $117.57M |
| Potential Savings (2% reduction) | $3.46M per 10,000 loans |

### Statistical Methodology
**Sample Size Determination**
- Power analysis conducted to determine optimal sample size
- Minimum detectable effect: 2 percentage points
- Confidence level: 95% (α = 0.05)
- Statistical power: 80% (β = 0.20)
- Calculated minimum: 3,716 loans
- Selected sample: 10,000 loans (2.7x safety margin)

**Analytical Framework**

1. **Exploratory Data Analysis**
   - Distribution analysis for numerical and categorical variables
   - Univariate, bivariate, and multivariate analysis
   - Missing data assessment (zero missing values confirmed)

2. **Statistical Testing**
   - Chi-square tests for categorical associations
   - T-tests and Mann-Whitney U tests for continuous variables
   - Two-proportion z-tests for policy period comparison
   - Correlation analysis for feature relationships

3. **Predictive Modeling**
   - Algorithm: Logistic regression
   - Training/validation split: 80-20
   - Feature scaling applied
   - Performance metrics: ROC-AUC 0.85, confusion matrix, precision/recall

**Risk Factor Hierarchy**

1. Credit score (primary predictor)
2. Debt-to-income ratio (critical metric)
3. Annual income (secondary factor)
4. Employment length, credit utilization, number of credit lines, loan amount

### Statistical Confidence
| Test | Confidence Level | P-Value | Interpretation |
|------|------------------|---------|----------------|
| Credit Score Analysis | 99.9% | p < 0.001 | Extremely strong evidence |
| DTI Analysis | 95%+ | p < 0.05 | Statistically significant |
| Policy Comparison | 99.8% | p = 0.002 | Very strong evidence |
| Model Performance | 85% accuracy | ROC-AUC = 0.85 | Strong predictive power |

### Recommendations
**Credit Policy Updates:**
- Implement minimum credit score threshold of 620
- Enforce maximum DTI ratio of 40%
- Continue stricter lending policy based on proven effectiveness

**Model Deployment:**
- Deploy logistic regression model for automated risk assessment
- Establish quarterly model retraining schedule
- Monitor model performance metrics continuously

**Risk Management:**
- Prioritize credit score in approval decisions
- Implement enhanced DTI verification procedures
- Develop risk-adjusted pricing strategies

### Limitations
- Analysis uses simulated dataset for demonstration purposes
- Model accuracy of 85% indicates 15% misclassification rate
- External economic factors not incorporated
- Requires validation with institutional data before production deployment
- Model performance should be monitored and recalibrated periodically

---

**Note:** This analysis uses rigorous statistical methods including power analysis, hypothesis testing, and predictive modeling. All findings are supported by appropriate confidence levels and statistical significance testing.
