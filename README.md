# **Supervised and Unsupervised Machine Learning in GEE**

### **Supervised Machine Learning:**

Definition: Trained on labeled data to predict output for new data.
Purpose: Used for classification and regression tasks.
Data Requirement: Requires labeled dataset.
Training Process: Learns from labeled data to predict output labels.
Output: Produces a model to predict labels for new data.
Applications: Land cover classification, crop type identification, predictive modeling.
### **Unsupervised Machine Learning:**

Definition: Trained on unlabeled data to find hidden patterns.
Purpose: Used for clustering and dimensionality reduction.
Data Requirement: Works with unlabeled data.
Training Process: Identifies natural groupings or patterns without guidance.
Output: Generates clusters or groups to reveal patterns.
Applications: Clustering in satellite imagery, anomaly detection, market basket analysis.

## **Introduction to Machine Learning Algorithms in Google Earth Engine (GEE) JavaScript API**

Google Earth Engine (GEE) provides a powerful platform for geospatial analysis, including the implementation of machine learning algorithms. This tutorial will introduce you to supervised and unsupervised machine learning concepts, with examples using the GEE JavaScript API.

**Supervised Machine Learning:**
Supervised learning involves training a model on labeled data. The model learns to predict the output based on input features.

Example: Land Cover Classification
Here is a supervised classification by using Sentinel-2 for Boalkhali upazila, then exported the classified image, prepared a fine-tuned map.
*   [GEE LINK](https://code.earthengine.google.com/fb96a27b10431d645647ec1d169a8c98)
*   [CODE LINK](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-8/blob/main/supervised.js)
*   [IMAGE LINK](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-8/blob/main/supervised.png)
*   [MAP LINK](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-8/blob/main/Clustered_image1.png)

**Unsupervised Machine Learning:**
Unsupervised learning finds patterns or groupings in data without labeled examples.

Example: K-means Clustering for Land Cover Segmentation
Here is an unsupervised classification by using Landsat-9 for Boalkhali upazila,then export the classified image, prepared fine-tuned map.
*   [GEE LINK](https://code.earthengine.google.com/748c3f3dbf79b384bbf769c7ba0e3e29)
*   [CODE LINK](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-8/blob/main/unsupervised.js)
*   [IMAGE LINK](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-8/blob/main/unsupervised.png)
*   [MAP LINK](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-8/blob/main/Clustered_image.png)
