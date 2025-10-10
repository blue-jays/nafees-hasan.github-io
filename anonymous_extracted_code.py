# anonymous_extracted_code.py

# Loading neccesary libraries:
# Loading neccesary libraries:
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from pandas.plotting import parallel_coordinates
import seaborn as sns
from scipy import  stats
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
import warnings
warnings.filterwarnings('ignore')
plt.style.use('default')

# ---- extracted cell break ----

%matplotlib inline
# without this the plots would be opened  in a new window (not browser)
# with this instruction plots will be included in the notebook

# ---- extracted cell break ----

# Use %config InlineBackend.figure_format = 'retina'
# after %matplotlib inline to render higher resolution images
%config InlineBackend.figure_format = 'retina'

# ---- extracted cell break ----

# If you wish to use Google colab, the following code will allow you to mount your Google Drive.
# Otherwise, comment on the following lines.
from google.colab import drive
drive.mount('/content/gdrive')

# ---- extracted cell break ----

# To print multiple outputs
from IPython.core.interactiveshell import InteractiveShell
InteractiveShell.ast_node_interactivity = 'all'
# Set it to None to display all columns in the dataframe
pd.set_option('display.max_columns', None)

# ---- extracted cell break ----

from google.colab import drive
drive.mount('/content/drive')

# ---- extracted cell break ----

df = pd.read_csv('/content/drive/MyDrive/TPartB/data/data.csv')
df

# ---- extracted cell break ----

#Write your code here

# ---- extracted cell break ----

##Write your code here

df.info()

# ---- extracted cell break ----

df.isnull().sum()
# there is no missing value in the dataset
df.head()

# ---- extracted cell break ----

# display the categorical columns
categorical_cols = df.select_dtypes(include=['object']).columns

# ---- extracted cell break ----

# Perform one-hot encoding using pandas' get_dummies() function
df_encoded = pd.get_dummies(df, columns=categorical_cols, dummy_na=False)  

# Now
print(df_encoded)

# ---- extracted cell break ----


# # make a histogram of

# ---- extracted cell break ----

# Select records with age at least 129
df_age_129= df[df['age'] >= 129]

# Construct a histogram of age
plt.hist(df_age_129['age'], bins=13)
plt.xlabel('Age')
plt.ylabel('Frequency')
plt.title('Histogram of Age (at least 129)')
plt.show()

# Explanation:


# ---- extracted cell break ----

# ---- extracted cell break ----

#Write your answer and code here
from scipy import stats
df['capital_z'] = stats.zscore(df['capital-loss'])

# data that fall outside the 99.7th percentile
outliers_capital_z = df[(df.capital_z > 3) | (df.capital_z < -3)]
outliers_capital_sorted = outliers_capital_z.sort_values( by = 'capital_z', ascending= True)
outliers_capital_sorted_x = outliers_capital_sorted[['capital-loss', 'capital_z']]
outliers_capital_sorted_x
outliers_capital_sorted_x.head(10)


# ---- extracted cell break ----

# Assuming df is your DataFrame and 'capital-loss' is the column name
# Calculate the z-scores for 'capital-loss'
df['capital_loss_zscore'] = np.abs(stats.zscore(df['capital-loss']))

# Define a threshold for outlier detection (e.g., z-score > 3)
threshold = 3

# Identify outliers based on the threshold
capitalloss_outliers = df[df['capital_loss_zscore'] > threshold]

# Print the number of outliers
print("Number of outliers in capital-loss:", len(capitalloss_outliers))

# View the first 10 rows of outliers
print(capitalloss_outliers.head(10))

# Construct a bar graph of Income for outlier records
plt.figure(figsize=(10, 6))
plt.bar(capitalloss_outliers.index, capitalloss_outliers['income'])
plt.xlabel('Record Index')
plt.ylabel('Income')
plt.title('Income for Capital-Loss Outliers')
plt.show()

# ---- extracted cell break ----

# making a bar graph of the income feature
plt.figure(figsize=(10, 6))
plt.bar(df.index, df['income'])
plt.xlabel('Record Index')
plt.ylabel('Income')
plt.title('Income for All Records')
plt.show()

# ---- extracted cell break ----

#Write your Answer  here

# ---- extracted cell break ----

# prompt: - Derive a flag for `capital-loss`, called `capital-loss-flag`, which equals 0 when `capital-loss` equals 0, and 1 otherwise.
# - Provide a bar graph of `capital-loss-flag`.

# Derive the capital-loss-flag
df['capital-loss-flag'] = df['capital-loss'].apply(lambda x: 0 if x == 0 else 1)

# Provide a bar graph of capital-loss-flag
plt.figure(figsize=(8, 6))
sns.countplot(x='capital-loss-flag', data=df)
plt.xlabel('Capital Loss Flag')
plt.ylabel('Count')
plt.title('Bar Graph of Capital Loss Flag')
plt.show()

# ---- extracted cell break ----

#Write your code and Answer  here
cont_tb = pd.crosstab(df['capital-loss-flag'], df['income'], normalize='columns') * 100
cont_tb

# ---- extracted cell break ----

# prompt: - Construct a contingency table of `capital-loss-flag` vs `Income`. Include counts and column percentages.
# - Clearly describe the effect of having any capital losses on Income.

# Calculate the contingency table with counts and column percentages
cont_table = pd.crosstab(df['capital-loss-flag'], df['income'], normalize='columns') * 100

print("Contingency Table (Column Percentages):")
print(cont_table)

# ---- extracted cell break ----

# prompt: ### **Task9 [1 Point]**
# - Create a horizontal bar graph of the capital-loss-flag variable with a income overlay (stacked bar chart).

# Create a horizontal bar graph of capital-loss-flag with income overlay (stacked bar chart)
capital_loss_income = pd.crosstab(df['capital-loss-flag'], df['income'])
capital_loss_income.plot(kind='barh', stacked=True, figsize=(10, 6))
plt.xlabel('Count')
plt.ylabel('Capital Loss Flag')
plt.title('Capital Loss Flag vs. Income (Stacked Bar Chart)')
plt.show()

# ---- extracted cell break ----

# Generate contingency tables
# Example: Contingency table between 'education' and 'income'
cont_table_education_income = pd.crosstab(df['education'], df['income'])
print("Contingency Table: Education vs. Income")
print(cont_table_education_income)

# Contingency tables are crucial for identifying relationships and dependencies between categorical variables.
# They help in understanding how different levels of one variable are associated with the levels of another variable.

# Generate bar charts
# Example: Bar chart of 'income'
plt.figure(figsize=(8, 6))
sns.countplot(x='income', data=df)
plt.xlabel('Income')
plt.ylabel('Count')
plt.title('Income Distribution')
plt.show()

# Example: Bar chart of 'education'
plt.figure(figsize=(12, 6))
sns.countplot(x='education', data=df)
plt.xlabel('Education')
plt.ylabel('Count')
plt.title('Education Distribution')
plt.xticks(rotation=45, ha='right')
plt.show()

# Generate summary statistics
summary_stats = df.describe()
print("Summary Statistics:")
print(summary_stats)

# Plot histograms for some columns
plt.figure(figsize=(8, 6))
plt.hist(df['age'], bins=20)
plt.xlabel('Age')
plt.ylabel('Frequency')
plt.title('Histogram of Age')
plt.show()

plt.figure(figsize=(8, 6))
plt.hist(df['hours-per-week'], bins=20)
plt.xlabel('Hours per Week')
plt.ylabel('Frequency')
plt.title('Histogram of Hours per Week')
plt.show()

# Additional EDA insights can be gained by examining individual features in more depth, creating scatter plots to explore relationships between numerical variables, and analyzing the distribution of variables within different subgroups.

# ---- extracted cell break ----

# ---- extracted cell break ----

# prompt: plot the heatmap for all the features

# Correlation heatmap for all features
plt.figure(figsize=(15, 10))
sns.heatmap(df_encoded.corr(), annot=True, cmap='coolwarm', fmt=".2f")
plt.title('Correlation Heatmap of Features')
plt.show()

# ---- extracted cell break ----
