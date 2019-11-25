from pyspark.sql import SparkSession

spark = SparkSession \
    .builder \
    .appName("postTags") \
    .config("spark.mongodb.input.uri", "mongodb+srv://sahilsehgal1995:test@stackflowdb-aobc3.gcp.mongodb.net/test.Tags") \
    .config("spark.mongodb.output.uri", "mongodb+srv://sahilsehgal1995:test@stackflowdb-aobc3.gcp.mongodb.net/test.Tags") \
    .config('spark.jars.packages', 'org.mongodb.spark:mongo-spark-connector_2.11:2.3.2') \
    .master("local") \
    .getOrCreate()

df = spark.read.format("com.mongodb.spark.sql.DefaultSource").load()

print (df.printSchema())