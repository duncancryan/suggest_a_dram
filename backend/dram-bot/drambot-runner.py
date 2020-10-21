# DRAMBOT runner
# This is the main runner file for DRAMBOT, use this to initiate all or part of the system

# ===============(Imports)=============== #
import tensorflow as tf


# ===============(RunnerStart)=============== #

# number = tf.Variable(23, tf.int16)

# print(number)

rank2_tensor = tf.Variable([[23], [3]], tf.int64)

tf.rank(rank2_tensor)
rank2_tensor.shape()