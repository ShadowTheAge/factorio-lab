# Temporary Dyson Sphere Program calculator

This is a temporary fork of https://github.com/factoriolab/factorio-lab

The goal is to have some calculator until actial calculators will be established

Not supported. Not maintained.

The calculator itself is located here: https://shadowtheage.github.io/factorio-lab

# How did I get the data?

I have used unity asset bundle extractor https://github.com/DerPopo/UABE to extract bundles and icons, and decompiler https://github.com/icsharpcode/ILSpy/releases to peek at the code and then reverse engineered the storage format

File containing information are called:

- Recipes - RecipeProtoSet
- Items - ItemProtoSet
- Resources - VeinProtoSet
- Localized names - StringProtoSet

There are other like for techs etc
As for some meta information like belt speeds and assembler speeds - they are there but harder to get so I just entered them manually