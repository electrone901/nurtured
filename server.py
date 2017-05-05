import flask
app=flask.Flask(__name__)

#-------- MODEL GOES HERE -----------#
from textstat.textstat import textstat
from nltk.tokenize import PunktSentenceTokenizer
from nltk.tokenize import RegexpTokenizer
import grammar_check

def get_sentence_count(string):
    sent_detector = PunktSentenceTokenizer()
    count = len(sent_detector.sentences_from_text(string))
    return count

def get_word_count(string):
    return textstat.lexicon_count(string, False)

def get_reading_ease(string):
    return textstat.flesch_reading_ease(string)

def get_grade_level(string):
    return textstat.flesch_kincaid_grade(string)

def get_grammar_count(string):
    tool = grammar_check.LanguageTool('en-GB')
    return len(tool.check(string))
	
def get_run_ons(string):
    sent_detector = PunktSentenceTokenizer()
    sentences = sent_detector.sentences_from_text(string)

    run_count = 0
    
    for x in sentences:
        sample = x
        wc = get_word_count(x)
        tokenizer = RegexpTokenizer(r'[^\w\s]')
        pc = len(tokenizer.tokenize(sample))
        if wc >16 and pc<3:
            run_count+=1
        
    return run_count

#-------- ROUTES GO HERE -----------#

@app.route('/predict', methods=["GET"])
def predict():

	text = flask.request.args['text']
	
	text = text.decode('utf-8')
	print text
	# print item
	sentences = get_sentence_count(text)
	words = get_word_count(text)
	reading_ease = get_reading_ease(text)
	grade_level = get_grade_level(text)
	grammar_count = get_grammar_count(text)
	run_ons = get_run_ons(text)
	
	
	results = {'Sentences': sentences , 'Words': words, 'ReadingEase':reading_ease, 'GradeLevel': grade_level, 'GrammarCount': grammar_count, 'RunOns': run_ons }
	print results
	return flask.jsonify(results)



@app.route('/page')
def page():
  with open('page.html' , 'r') as viz_file:
      return viz_file.read()

@app.route('/result', methods=['POST','GET'])
def result():

    if flask.request.method=="POST":
		
		inputs=flask.request.form
		
		text = inputs['text']
		text = text.decode('utf-8')
		print text
		
		sentences = get_sentence_count(text)
		words = get_word_count(text)
		reading_ease = get_reading_ease(text)
		grade_level = get_grade_level(text)
		grammar_count = get_grammar_count(text)
		run_ons = get_run_ons(text)
	
	
		results = {'Sentences': sentences , 'Words': words, 'ReadingEase':reading_ease, 'GradeLevel': grade_level, 'GrammarCount': grammar_count, 'RunOns': run_ons }
	
		print results
		return flask.jsonify(results)

if __name__=='__main__':
  HOST='127.0.0.1'
  PORT='4000'

  app.run(HOST,PORT)
