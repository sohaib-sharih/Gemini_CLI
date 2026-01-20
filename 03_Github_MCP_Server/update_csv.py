
import pandas as pd

# Read the CSV file
try:
    df = pd.read_csv("white heaven.csv")
except FileNotFoundError:
    print("Error: white heaven.csv not found.")
    exit()

# Update the 'Sale price' column to 4800
if 'Sale price' in df.columns:
    df['Sale price'] = 4800
    # Save the updated DataFrame to a new CSV file
    df.to_csv("updated_white_heaven.csv", index=False)
    print("Successfully updated 'Sale price' to 4800 in updated_white_heaven.csv")
else:
    print("Error: 'Sale price' column not found in the CSV.")
