---
title: Getting Started with ML Python Quickstart
date: 2023-12-20
image-prompt: An illustration showcasing the Python programming language in the context of machine learning, featuring symbolic representations of Python libraries such as NumPy, Pandas, Matplotlib, Seaborn, Bokeh, and Scikit-learn, along with abstract visualizations of data analysis, algorithms, and statistical models
image: ML-intro.png
imageAlt: Illustration of Python and its libraries for machine learning with abstract data visualizations
description: Explore this guide on getting started with machine learning in Python, covering essential libraries like NumPy, Pandas, Matplotlib, Seaborn, Bokeh, and Scikit-learn for beginners.
introduction: This beginner's guide to machine learning with Python covers the installation and basic use of fundamental libraries such as NumPy, Pandas, Matplotlib, Seaborn, Bokeh, and Scikit-learn. It provides a comprehensive starting point for anyone new to data science and machine learning.
tags:
  - Machine Learning
  - Python
  - NumPy
  - Pandas
  - Matplotlib
  - Seaborn
  - Bokeh
  - Scikit-learn
  - Data Science
---

Machine Learning, at its core, is about creating algorithms and models that automatically extract knowledge from data to solve tasks or predict outcomes [4]. Unlike traditional rule-based programming, machine learning enables systems to learn and improve from experience without being explicitly programmed [1].

Python, with its simplicity and an extensive array of libraries, stands as a preferred language for machine learning.

## 1. Setting Up Python

Ensure you have Python installed on your system. You can download it from the [official Python website](https://www.python.org/).
I have written a guide how you can even [install multple versions of python](https://blog.skillsoft-demo.net/blog/python-multilple-versions/) on your machine.

### 2. Installing NumPy

NumPy is a fundamental package for scientific computing in Python. To install NumPy:

```bash
pip install numpy
```

[[1](https://numpy.org/doc/stable/user/absolute_beginners.html)].

### 3. Getting Started with NumPy

- Learn the basics of NumPy, such as array creation, indexing, and operations. The [NumPy Quickstart Guide](https://numpy.org/doc/stable/user/quickstart.html) is a great resource [[4](https://numpy.org/doc/stable/user/quickstart.html)].

### 4. Installing Pandas

Pandas is used for data manipulation and analysis. To install Pandas:

```bash
pip install pandas
```

[[2](https://pandas.pydata.org/)]

### 5. Exploring Pandas

- Start with basic data structures like Series and DataFrame.
- Learn how to import data, perform data cleaning, manipulation, and basic data analysis. W3Schools offers a comprehensive [Pandas Tutorial](https://www.w3schools.com/python/pandas/default.asp) [[5](https://www.w3schools.com/python/pandas/default.asp)].

### 6. Installing Matplotlib

Matplotlib is a plotting library for Python. To install it:

```bash
pip install matplotlib
```

[[3](https://matplotlib.org/)]

### 7. Learning Matplotlib

- Begin with simple plots like line graphs and histograms.
- Explore more complex visualizations and how to customize your plots. W3Schools provides a useful [Matplotlib Tutorial](https://www.w3schools.com/python/matplotlib_pyplot.asp) [[6](https://www.w3schools.com/python/matplotlib_pyplot.asp)].

### 8. Installing Seaborn

Seaborn is a statistical data visualization library based on Matplotlib. To install Seaborn:

```bash
pip install seaborn
```

[[7](https://seaborn.pydata.org/installing.html)].

### 9. Learning Seaborn

Explore Seaborn's capabilities through its [introduction page](https://seaborn.pydata.org/introduction.html) and example gallery. It provides a high-level interface for drawing attractive and informative statistical graphics [[10](https://seaborn.pydata.org/introduction.html)].

### 10. Installing Bokeh

Bokeh is a Python library for creating interactive visualizations for modern web browsers. It helps you build beautiful graphics, ranging from simple plots to complex dashboards with streaming datasets. With Bokeh, you can create JavaScript-powered visualizations without writing any JavaScript yourself. Bokeh can be installed via pip:

  ```bash
  pip install bokeh
  ```

[[13](https://pypi.org/project/bokeh/)]

### 11. Learning Bokeh

- Learn about Bokeh through tutorials and documentation available on its [official website](https://hub.ovh2.mybinder.org/user/bokeh-tutorial-k6dmegxo/notebooks/notebooks/01_introduction.ipynb). okeh is an open-source library for creating interactive visualization for modern web browsers.

With Bokeh, you can use Python to build beautiful data visualizations, ranging from simple plots to complex dashboards with streaming datasets. In a nutshell: Bokeh lets you create JavaScript-powered visualizations without having to write any JavaScript yourself.

Bokeh can generate stand-alone HTML objects to use in any kind of website, or you can run Bokeh as a server. But Bokeh also works directly in Jupyter Notebooks.

### 12. Installing Scikit-learn

Scikit-learn is an open source machine learning library that supports supervised and unsupervised learning. It also provides various tools for model fitting, data preprocessing, model selection, model evaluation, and many other utilities. you can install Scikit-learn using pip:

```bash
pip install scikit-learn
```

[[9](https://scikit-learn.org/)].

### 13. Exploring Scikit-learn

- Start exploring Scikit-learn through its [official website](https://scikit-learn.org/stable/getting_started.html). It offers simple and efficient tools for predictive data analysis, accessible to everybody and reusable in various contexts [[12](https://en.wikipedia.org/wiki/Scikit-learn)].

### 14. Practice and Projects

- Apply these tools in small projects or data analysis tasks.
- Experiment with different datasets to enhance your skills.

### 15. Further Learning

- Explore other Python libraries and frameworks as you grow more comfortable.
- Consider learning about data visualization, machine learning, or web development with Python.

Remember, the key to mastering these libraries is consistent practice and application in real-world scenarios.

## Sources

1. [numpy.org - NumPy: the absolute basics for beginners](https://numpy.org/doc/stable/user/absolute_beginners.html)
2. [pandas.pydata.org - pandas - Python Data Analysis Library](https://pandas.pydata.org/)
3. [matplotlib.org - Matplotlib — Visualization with Python](https://matplotlib.org/)
4. [numpy.org - NumPy quickstart — NumPy v1.26 Manual](https://numpy.org/doc/stable/user/quickstart.html)
5. [w3schools.com - Pandas Tutorial](https://www.w3schools.com/python/pandas/default.asp)
6. [w3schools.com - Matplotlib Pyplot](https://www.w3schools.com/python/matplotlib_pyplot.asp)
7. [seaborn.pydata.org - Installing and getting started — seaborn 0.13.0 documentation](https://seaborn.pydata.org/installing.html)
8. [vinkacademy.nl - Wat is bokeh en hoe krijg je het bokeh effect in de foto?](https://vinkacademy.nl/fotografietips/wat-is-bokeh-effect/)
9. [scikit-learn.org - scikit-learn: machine learning in Python — scikit-learn 1.3.2](https://scikit-learn.org/)
10. [seaborn.pydata.org - An introduction to seaborn](https://seaborn.pydata.org/introduction.html)
11. [nl.wikipedia.org - Bokeh](https://nl.wikipedia.org/wiki/Bokeh)
12. [en.wikipedia.org - Scikit-learn](https://en.wikipedia.org/wiki/Scikit-learn)
13. [bokeh - PyPI](https://pypi.org/project/bokeh/)

### requrements.txt

this is the content of my `requirements.txt` feel free to use it.

```bash
bokeh==3.3.2
contourpy==1.2.0
cycler==0.12.1
fonttools==4.47.0
importlib-resources==6.1.1
Jinja2==3.1.2
joblib==1.3.2
kiwisolver==1.4.5
MarkupSafe==2.1.3
matplotlib==3.8.2
numpy==1.26.2
packaging==23.2
pandas==2.1.4
Pillow==10.1.0
pyparsing==3.1.1
python-dateutil==2.8.2
pytz==2023.3.post1
PyYAML==6.0.1
scikit-learn==1.3.2
scipy==1.11.4
seaborn==0.13.0
six==1.16.0
threadpoolctl==3.2.0
tornado==6.4
tzdata==2023.3
xyzservices==2023.10.1
zipp==3.17.0
```
