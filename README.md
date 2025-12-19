# CAT: Cross-Platform Ability Transfer for Arctic Cloud Masking

Cloud masking is an essential task for satellite-based Earth monitoring, and the quality of cloud masks can directly impact the solutions of the downstream Earth monitoring tasks. While significant progress has been made especially for data with desired bands (e.g., thermal bands in Landsat-8), the masking quality on small satellites with higher resolution but fewer spectral bands is still unreliable at high latitudes, where confusion with snow and ice makes the task significantly more challenging.

## 🛠️ Method

We propose a novel learning-enabled cross-platform ability transfer paradigm that offers a scalable and effective solution to tackle this challenge through a case study using PlanetScope images in the Arctic. A unique characteristic of the new paradigm is that it does not require manual annotations to be collected for PlanetScope images, which is often the bottleneck and the most time-consuming part of machine learning-based cloud masking, especially given the similarity between clouds and snow/ice. 

## 🛰️ Co-Clouds: A Coincident Dataset

To support this paradigm, we introduce **Co-Clouds**, a large-scale dataset of ~45,000 coincident image patch pairs between **PlanetScope** and **Landsat-8**, collected under near-simultaneous observation windows (30s). This dataset enables scalable training by leveraging Landsat-8's superior cloud detection as supervisory guidance for PlanetScope.

Key features of Co-Clouds:
- Aligned image pairs (PS-L8) from Arctic regions.
- No manual labeling required.

## 🧠 Models & Evaluation

Using our Co-Clouds dataset, we train both conventional deep learning models and large foundation models (e.g., **SegFormer**). To validate their performance, we create a **manually labeled test set** for PlanetScope cloud masks in the Arctic.

## 📂 Contents

- `Sedona_coincident_pair_mining/`: Coincident‑pair mining workflows for constructing Co‑Clouds Using Apache Sedona
- `Co-Clouds/`: Lists of PlanetScope and Landsat‑8 scene IDs used in the dataset  
- `models/`: Training and Testing code (SegFormer, UNet, etc.)
👉 [**Model Weights**](https://drive.google.com/drive/folders/1hRVd4conSBaYoXl2iyaSBs-qZ0mXupp4?usp=sharing)

## 📄 Citation

> Li, Zhili, Yiqun Xie, Sergii Skakun, Xiaowei Jia, Gengchen Mai, William Lu, Matthew Tong, and Zhihao Wang. "Annotation-free cloud masking for PlanetScope images in the Arctic via cross-platform ability transfer using deep learning and foundation models." Remote Sensing of Environment 334 (2026): 115138.

