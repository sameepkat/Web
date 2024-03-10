# **Unit I: Basic Discrete Structures**
## 1.1 Sets
### Sets:
A Set is any well-defined collection of objects.
*"Object"* and *"set"* are the building blocks of set theory.
*Well-defined* means it is always possible to determine whether a particular object is a member of the set under consideration.
### Set representation:
Sets are usually represented by letters such as A,B,C,D. There are mainly three to represent set. They are: List, Predicate, Missing element representation.
### Set operations:
1. The Union of Set $A\cup B$
2. The Intersection of Set $A\cap B$ 
3. The complement of Set $\bar A$
4. The difference of Set $A - B$ 
### Venn-Diagrams
Diagrams which are used to show relationship between sets are called venn-diagrams.
### Inclusion-Exclusion Principle
Let A, B be any two finite sets. Then $n(A\cup B)=n(A)+n(B)-n(A\cap B)$
Here, include $n(A)$ and $n(B)$ and exclude $n(A\cap B)$
### Computer Representation of Sets
Representing Union, Intersection and other set operations in computer is time consuming and inefficient.
So methods such as Arrays, Hash Tables, Binary Search trees (BSTs) are used.

## 1.2 Functions
### Function
A relation from set A to B is called a function $f:A\to B$ if to each element a$\in$A, we can assign unique element of B to A.
$A=\{a,b\}$  and $B=\{1,2\}$
### Injective, Surjective and Bijective Functions:
#### Injective function: One to One function (Injection)
A function $f$ from set A to B is one to one if no two elements in A are mapped to same element in $B$.
#### Surjective function: Onto function (Surjective)
A function $f$ from set A to B is onto if each element of B is mapped to at least one element in A.
#### Bijective function: Bijective
A function $f$ which is both one to one and onto.

### Inverse and Composite Functions
#### Inverse functions:

#### Composite functions:
Let $f:A\to B$ and $G:B\to C$. The composition to G is a function from A into C defined by $(g_o f)x=g[f(x)]$ and is denoted by $g_o f$.
### Functions For Computer Science 
#### Ceiling Function:
It is the function in which the smallest successive number is returned. (Nearest integer UP)
#### Floor Function
It is the function in which the largest down number is returned. (Nearest integer DOWN)
#### Boolean Function:
It refers to a function having $'n'$ number of entries or variables, so it has $2^n$ number of possible combinations of the given variables. Such function would only assume 0 or 1 in their output.
[] ^973009
#### Exponential Function
It is the mathematical function $f(x)=a^x$, where x is a variable and $a$ is a constant.

## 1.3 Integers and Division, Primes and Greatest Common Divisor, Extended Euclidean Algorithm
### Primes and Greatest Common Divisor
#### Prime and Composite
An integer greater than 1 is written prime if the only positive factors of $p$ are 1 and $p$. A positive integer that is greater than 1 and not prime is known as Composite. 
**Theorem 1: The Fundamental Theorem of Arithmetic**
Every positive integer greater than 1 can be written uniquely as a prime or the product of two or more primes.
**Theorem 2: If n is a composite integer, then n has a prime divisor less than or equal to** $\sqrt n$ 
![[Pasted image 20240212212644.png]]
**The Infinitude of Primes: "There are infinitely many primes"**
[Theorems](obsidian://open?vault=Obsidian%20Vault&file=1st%20semester%2FDiscrete%20Structure%2FDiscrete_PST-Written-Notes.pdf&page=72)
#### Greatest Common Divisor
GCD of two or more numbers is the greatest common factor that divides them exactly. It is also called Highest Common Factor(HCF). The methods of finding GCD are: *Prime Factorization Method, Long Division Method and Euclid's Division Algorithm*
##### Euclid's Division Algorithm
![[Pasted image 20240212214530.png]]
### Extended Euclidean Algorithm
Extended Euclidean Algorithm finds integer coefficients x and y such that: $(ax+by)=gcd(a,b)$ 
![[Pasted image 20240212214856.png]]
## 1.4 Matrices: Zero-One Matrices, Boolean Matrix Operations
### Zero-One Matrices:
A matrix whose entries are either 0 or 1 is called zero-one matrix.
Join => $\land$
Meet => $\lor$ 
### Boolean-Matrix Operation
The *Boolean Products* of zero-one matrices. The Boolean product of set $A_{m*k}$ and $B_{k*n}$, denoted by $A\odot B$ = $(A_{i*j}\land B_{i*j})\lor (A_{i*j}\land B_{i*j})$ 

## 1.5 Basics of Counting, Pigeonhole principle and Permutations and Combinations
### Basics of Counting
The fundamental principle of counting states that if there are n ways of doing something and m ways of doing another thing after that, then there are $m*n$ ways of doing them together
### Permutations and Combinations
$^nPr=\frac{n!}{(n-r)!}$ 
$^nCr=\frac{n!}{r!(n-r)!}$ 
### Pigeonhole Principle
It states that,"if n pigeonholes are occupied by (n+1) or more pigeons, then at least one pigeonhole is occupied by more than one pigeon."
The generalized pigeonhole principle: *If N objects are placed into K boxes, then there are at least $[{N\over K}]$ objects.*


_____________________
# **Unit II: Relations**
## 2.1 Relations and Their Types
### Relations
Let A and B be two sets. A binary relation R from A to B is a subset of AxB.
$$R\subseteq A*B$$
### Types of Relations: (RSTEAIA)
1. Reflexive relation
   A relation R on set A is called reflexive if for all element a$\in$a then (a,a) must belong to **R**
2. Symmetric relation:
   We say a relation R on a set A is symmetric if a**R**b $\rightarrow$ b**R**a for all a,b $\in$ A
3. Transitive relation:
   We call a relation **R** transitive if whenever a is related to b and b is related to c follows that a is related to c.
4. Equivalence relation:
   A relation **R** on set A which is reflexive, symmetric and transitive is called an equivalence relation.
5. Anti-Symmetric relation:
   A relation **R** on set A is called anti-symmetric if for all (a,b) belongs to **R** then (b,a) belong to **R** if and only if a=b.
6. Irreflexive relation:
   We say a relation **R** on a set A is irreflexive if (x,x) doesn't belong to **R** for every element x$\in$ A
7. Asymmetric relation:
   A relation **R** on set A is called asymmetric if it's both anti-symmetric and reflexive.
## 2.2 Properties of Relations
|**Relation** |**Property** |
|---|---|
|Reflexive Relation|∀a ∈ A, (a, a) ∈ R|
|Symmetric Relation|∀a, b ∈ A, (a, b) ∈ R ⇒ (b, a) ∈ R|
|Transitive Relation|∀a, b, c ∈ A, (a, b) ∈ R ∧ (b, c) ∈ R ⇒ (a, c) ∈ R|
|Equivalence Relation|Reflexive, symmetric, and transitive|
|Anti-Symmetric Relation|∀a, b ∈ A, (a, b) ∈ R ∧ (b, a) ∈ R ⇒ a = b|
|Irreflexive Relation|∀a ∈ A, (a, a) ∉ R|
|Asymmetric Relation|Anti-symmetric and irreflexive|
## 2.3 Representations of relations
1. Listing Method
2. Set-builder Method: $R_{A\ to\ B} = \{(x,y)|x\leq y\}$ 
3. Statement Representations: $\forall x \in A, \forall y\in B, xRy\ \  iff x\leq y$
4. Matrix Representation
5. Graph Representation
## 2.4 Closures of Relations
### Closure Definition:
The closure of relation R with respect to Property P is the relation obtained by adding the minimum no of ordered pairs to R to obtain property P.
### Types of Closure:
1. Reflexive Closure
2. Symmetric Closure 
3. Transitive Closure
### Warshall's Algorithm
1. Represent the relation in matrix form
2. Take the elements in 1st column (C1) and first row (R2)
3. Multiply C1 and R1
4. Add all the order pairs from the 3rd step to the matrix
5. Repeat step 3 until the last row and column
6. The final matrix is transitive closure.
[Example of Warshall's Algorithm](obsidian://open?vault=Obsidian%20Vault&file=1st%20semester%2FDiscrete%20Structure%2FDiscrete_PST-Written-Notes.pdf&page=46)

## 2.5 Equivalence Relations
A relation R on set A is an equivalence relation iff R is reflexive, symmetric and transitive.

## 2.6 Partial Orderings
A set S together with relation R is called a partially ordered set or poset. A partially ordered set (also poset) formalizes and generalizes the intuitive concept of an ordering, sequencing, or arrangement of the elements of a set.
-The relation should be
- Reflexive
- Antisymmetric
- Transitive
[Example of POSET:](obsidian://open?vault=Obsidian%20Vault&file=1st%20semester%2FDiscrete%20Structure%2FDiscrete_PST-Written-Notes.pdf&page=53)
Q. *What is Parital in Partial Ordering?*
1. It indicates that not every pair of element in a set is comparable
2. Comparable: The elements a and b of POSET(S,R) are called comparable if either aRb or bRa.
3. Incomparable: The elements a and b of POSET(S,R) are called incomparable if neither aRb nor bRa.
### Hasse Diagram
A hasse diagram is a graphical representation of a partially ordered set display via the cover relation of the partially ordered set with an implied upward orientation.
    Step 1: Remove self-loops
    Step 2: Remove transitive edges
    Step 3: Remove arrows
    ![[Pasted image 20240214131233.png]]

_____________________
# Unit III: Recurrence Relation
## 3.1 Recursive Definition of Sequences
### Recurrence Relation
A recurrence relation for the sequence $a_n$ is an equation that expresses $a_n$ in terms of one or more of the previous terms of the sequence, namely $a_0, a_1, a_2, a_3,........a_{n-1}$ for all integers n with $n\geq 0$ where $n_0$ is a non-negative integer.
## 3.2 Solution of Linear Recurrence Relation (Homogeneous)
A linear homogeneous recursive relation of degree k with constant coefficient is the recurrence relation of the form: $$a_n=C_1a_{n-1}+C_2a_{n-2}+....+C_ka_{n-k}$$
### Rules for Linear Homogeneous Recurrence relation
1. If the roots are real and distinct. Then
   $F_n = a(x_1)^n + b(x_2)^n$
2. If the roots are real and equal. Then
   $F_n = a(x_1)^n +bn(x_1)^n$
3. If the roots are complex
   $x_1 = r\angle \theta$
   $x_2 = r\angle- \theta$ . Then,
   $F_n = r^n(a\cos(n\theta)+bsin(n\theta))$
*Imp:*[Homogeneous Relation](obsidian://open?vault=Obsidian%20Vault&file=1st%20semester%2FDiscrete%20Structure%2FDiscrete_PST-Written-Notes.pdf&page=89)
## 3.3 Solution of Non-Linear Recurrence Relation (Non-homogeneous)
A recurrence relation of the form $$a_n=C_1a_{n-1}+C_2a_{n-2}+....+C_ka_{n-k}+f(n)$$
is said to be non-linear homogeneous recurrence relation
### Rules for Non-Linear Homogeneous Recurrence Relation
P(n) => Polynomial of degree s
$\beta$ => $\beta$ is not a characteristic root
$\alpha$ => $\alpha$ is a characteristic root
t => multiplicity of $\alpha$ => no. of time $\alpha$ appears
Case I: f(n) = C, (Constant) => $(a_n)^{par} = A$
Case II: f(n) = P(n) => $(a_n)^{par}=A_0+A_1n+A_2n^2+.....+A_sn^s$
Case III: f(n) = $\beta^n$.P(n) => $(a_n)^{par}=\beta^n(A_0+A_1n+A_2n^2+.....+A_sn^s)$
Case IV: f(n) = $\alpha^n.P(n)$ => $(a_n)^{par} = n^t\alpha^n(A_0+A_1n+A_2n^2+.....+A_sn^s$)
[Examples and Solutions:](obsidian://open?vault=Obsidian%20Vault&file=1st%20semester%2FDiscrete%20Structure%2FDiscrete_PST-Written-Notes.pdf&page=94)


____________________________
# **Unit IV: Logic, Induction and Reasoning**
*Uses of Logic:*
1. In math, logic is used to prove theorems
2. In computer, logic is used to check whether a program generates a correct output or result.
### Types of Logic
1. Propositional Logic
2. Predicate Logic
3. Fuzzy Logic
## 4.1 Propositions and Truth Functions
A declarative sentence that is either True or False but not both of them is called proposition. 
## 4.2 Propositional Logic:
Logic that deals with propositions are called propositional Logic.
### Logical Operators
1. Negation $\lnot$  ,~ "not p"
2. Conjunction $\land$ "p and q"
3. Disjunction (Inclusive OR) $\lor$ "either p or q or both"
4. Exclusive-OR $\oplus$ "either p or q but not both"
5. Implication $\to$ "if p then q"

| p | q | $p\to q$ |
| :--- | :--- | ---- |
| T | T | T |
| T | F | F |
| F | T  | T |
| F | F | T |
6. Bi-conditional $\leftrightarrow$ "p if and only if q"

| p | q | $p\leftrightarrow q$ |
| ---- | ---- | ---- |
| T | T | T |
| T | F | F |
| F | T | F |
| F | F | T |
### Types of Compound Propositions
1. Tautology => All true
2. Contradiction => All false
3. Contingency => Combination of True and False

### Implication, Converse, Inverse and Contra-positive 
1. Implication => $p\to q$
2. Converse => $q\to p$
3. Inverse => $\lnot p\to \lnot q$
4. Contrapositive =>$\lnot q \to \lnot p$

## 4.3 Propositional Equivalences
If p and q are two compound propositions, then the equivalence of p and q are denoted by $p\equiv q$ 

## 4.4 Predicate Logic and Quantifiers
### Predicate Logic 
Predicate Logic are those logic which are defined using some predicate. The truth and false value of predicate statements are not declarative. They are also called first order propositional logic.
### Quantifiers
Quantifiers are words that refers to quantities such as "some" or "all". It tells for how many elements, the given predicate is true.
#### Types of Quantifiers:
1. Universal Quantifier 
   For all: $\forall\ x P(x)$
2. Existential Quantifier
   For some: $\exists x\ P(x)$  
   ##### Negating Existential Quantifier
   $\lnot \forall x P(x)\equiv \exists x\to \lnot P(x)$
   $\lnot \exists x P(x)\equiv \forall x\to \lnot P(x)$
#### Nested Quantifiers:
Two quantifiers are said to be nested if one is within the scope of other. Eg:
1. $\forall x\forall y\ Q(x,y)$ -> Order of quantifier doesn't matter
2. $\exists x\exists y\ Q(x,y)$ -> Order of quantifier doesn't matter
3. $\forall x\exists y\ Q(x,y)$ -> Order of quantifier does matter
4. $\exists x\forall y Q(x,y)$ -> Order of quantifier does matter
##### Negating the Nested Quantifiers:
$\forall x \exists y\ (xy=1)$ $\equiv \exists x\forall y (xy\neq1)$  

## 4.5 Deduction in Predicate Logic
[Predicate Logic Examples froms Notes](obsidian://open?vault=Obsidian%20Vault&file=1st%20semester%2FDiscrete%20Structure%2FDiscrete_PST-Written-Notes.pdf&page=123)
## 4.6 Rules of Inferences
It is the template for constructing valid arguments. Process of drawing a conclusion from the given facts using certain valid rules.
### Types of Inference Rules (MMHDASCR)
1. Modus Ponens
    $[(p\to q)\land p]\to q$
2. Modus Tollens
    $[(p\to q)\land \lnot q]\to \lnot p$
3. Hypothetical Syllogisms
    $[(sp\to q)\land (q\to r)] \rightarrow (p\to r)$
4. Disjunctive Syllogism
    $[(p\lor q)\land \lnot p]\to q$
5. Addition Rule
    $p\to (p\lor q)$
6. Simplification
    $[(p\land q)]\to p$ or $[(p\land q)]\to q$
7. Conjunction
    $[(p)\land(q)]\to (p\land q)$
8. Resolution
    $[(p\lor q)\land(\lnot p \lor r)\to (q\lor r)$
### Rules of Inference for Quantified statements
#### 1. Universal Instantiation:
This rule is used to conclude that P(c) is true when $\forall x\ P(x)$ is true. (for some c in that particular domain).
$[\forall x\ P(x)]\to P(c)]$
#### 2. Universal Generalization:
This rule states that $\forall x\ P(x)$ is true, given the premise, P(c) is true for an arbitrary c.
#### 3. Existential Instantiation:
This rule allows us to conclude that there is some element $c$ for which $P(c)$ is true, when $\exists x\ P(x)$ is true.
#### 4. Existential Generalization:
This rule states that $\exists xP(x)$ is true when for a particular element c, P(c) is true. If we know for some element c in the domain, $P(c)$ is true, we also know that $\exists x\ P(x)$ is true.
[Youtube Explanation](https://youtu.be/akiBw21opuw)
## 4.7 Mathematical Reasoning
*Proof:* An argument used to establish the truth of mathematical statement is proof. Proof can be:
1. Formal
2. Informal
   - Direct
   - Indirect
     1. Proof by contradiction
     2. Proof by Contraposition
### Direct Proof:
A direct proof of $p\to q$ is a logical valid argument in which we start with the assumption that 'p' is true, and the using p as well as other axioms, show directly that 'q' is true.
[Examples of direct proof:](obsidian://open?vault=Obsidian%20Vault&file=1st%20semester%2FDiscrete%20Structure%2FDiscrete_PST-Written-Notes.pdf&page=143)
### Indirect Proof:
#### 1. Proof by Contraposition:
An implication $p\to q$ is equivalent to it's contropositive $\lnot q\to \lnot p$
[Examples of proof by Contraposition](obsidian://open?vault=Obsidian%20Vault&file=1st%20semester%2FDiscrete%20Structure%2FDiscrete_PST-Written-Notes.pdf&page=145)
#### 2. Proof by Contradiction:
Suppose $p\to q$. In this we assume that q is false($\lnot q$ is true). Then by using logical argument we arrive at the situation where $\lnot q$ implies a contradiction.
[Examples of Proof by Contradiction](obsidian://open?vault=Obsidian%20Vault&file=1st%20semester%2FDiscrete%20Structure%2FDiscrete_PST-Written-Notes.pdf&page=147)

## 4.8 Mathematical Induction
![[Pasted image 20240213144641.png]]
[Examples of Mathematical Induction](obsidian://open?vault=Obsidian%20Vault&file=1st%20semester%2FDiscrete%20Structure%2FDiscrete_PST-Written-Notes.pdf&page=149)
_____________________
# **Unit V: Graph Theory**
## 5.1 Graph and it's types:
### Graph
A graph is referred to as a mathematical structure that represents a particular function by connecting a set of points.
#### Uses of Graphs
 1. Routing through a path
 2. shortest distance between two destinations
 3. Google maps
 4. Dijkstra's Algorithm
 5. Prim's Algorithm
 6. Kruskal's Algorithm
### Types of Graphs
#### On the basis of pair of vertices
1. Directed Graph
2. Undirected Graph
#### On the basis of edges
##### 1. Simple Graph
No loop and No parallel edges are allowed
##### 2. Multi Graph
Parallel edges are allowed but not loop
##### 3. Pseudo Graph
Both loop and parallel edges are allowed

## 5.2 Graph Representation
[Notes of Graph Representation](obsidian://open?vault=Obsidian%20Vault&file=1st%20semester%2FDiscrete%20Structure%2FDiscrete_PST-Written-Notes.pdf&page=4)
### 1. Adjacency Matrix
A matrix formed with the help of vertices of a graph is called adjacency matrix.
### 2. Incidence Matrix
A matrix formed with vertices and edges of a graph is called incidence matrix.
### 3. Path Matrix
P = $[P_{ij}]$=$\frac{1}{0}$$\text{if there is a path from node}\ v_i\ \text{to}\ v_d\over \text{if otherwise}$

## 5.3 Walk, Path, Trails and Circuits (Cycle)
### 1. Walk 
Traversing a graph in such a way that we can repeat any number of vertices of edges in a walk. 
### 2. Path 
Traversing along a graph so that no vertices and edges can be repeated.
### 3. Trail 
Traversing along a graph so that no edges are repeated but can repeat vertices
### 4. Circuit 
Traversing a graph so that we can repeat vertices but cannot repeat edge and we have to end at the vertices we have started with (Closed trail) 
### 5. Cycle
Traversing a graph so that we cannot repeat vertices or edge and have to end where we started (Closed path)

## 5.4 Regular graph, complete graph, cycle graph, connected graph, simple and bipartite graph, Eulerian Graph, Hamilton Graph (RCCSBEH)
### Regular Graph
A graph in which every vertex has same degree is called regular graph.
$\text{No. of edges }={n* d\over 2}= {node * degree \over 2}$ 
### Complete Graph
A simple graph is complete graph in which every pair of vertices are adjacent.
$\text{No. of edges }=^nC_2$ 
$\text{Degree of every vertex }=n-1$ 
### Cycle Graph
The cycle $C_n, n\geq 3$ consists of n vertices $v_1,v_2,v_3,.....v_n$ and edges {$v_1,v_2$},{$v_2,v_3$},....{$v_{n-1},v_n$} and {$v_n,v_1$}
### Connected Graph
Two vertices $u$ and $v$ are said to connected if there exists a path between them. i.e. if u is reachable from v and vice versa
#### Cut edge
An edge e of a graph G is said to be cut edge or a bridge of G if (G-e) is disconnected.
#### Cut vertex (Cut point)
A vertex v of a graph G is said to be a cut vertex or a cut point of G if (G-v) is disconnected.
#### Cut set
The set of all minimum number of edges of G whose removal disconnects a graph G is called a cut-set of G.
Thus, a cut set *S* must satisfy the following:
1. S is a subset of edge set E of G
2. Removal of edges from a connected graph G, disconnects G.
3. No proper subset of G satisfy the condition.
### Bipartite Graph
A graph G is said to be a bipartite graph if it's vertex set v can be partitioned into two sets, say $v_1$ and $v_2$, such that no two vertices on the same partition can be adjacent.
[Example](obsidian://open?vault=Obsidian%20Vault&file=1st%20semester%2FDiscrete%20Structure%2FDiscrete_PST-Written-Notes.pdf&page=12)
#### Complete Bipartite Graph
If all the vertices of the first part $v_1$ are connected to all the vertices of the second part $v_2$, then such vertices are called complete bipartite graph.
### Eulerian Graph
- A path in a graph G is called *Euler path* if it includes every edge exactly once. Since the path contains every edge exactly once, it is also called *Euler's trail.*
- An euler path that is circuit is called *Euler circuit*. A graph which has Eulerian circuit is called an *Eulerian graph*.
    Let *G* be a connected graph with *E* number of edges, *V* number of vertices and *F* number of faces, then for a graph to be planar.$$V-E+F=2$$  ![[Pasted image 20240213180459.png]]
[Euler youtube explanation](https://youtu.be/FoiLXsV-bnI)
### Hamilton Graph
- A *hamiltonian path* is a simple path that contains all the vertices of G where the end path are distinct.
- A *hamiltonian circuit* is a circuit that contains all the vertices of G exactly once, except for the starting and ending vertex which appears twice.
- A graph is called *Hamiltonian Graph* if it contains a Hamiltonian Circuit and a *semi-Hamiltonian Graph* if it contains a Hamiltonian path.
[Hamilton youtube explanation](https://youtu.be/GiClUAJMMtw)
[Semi-Hamiltonian youtube explanation](https://youtu.be/fhJO2WHRRuY)

### Weighted, Planar and Sub-graph
#### 1. Weighted Graph:
- A type of graph which has some weight on their edges is weighted graph
- The weights on the graph is generally the distance or cost or any other that represents while moving from one edge to another.
- eg: Distance between two place can be represented by weighted graph.
#### 2. Planar graph:
- A type of graph where no two vertices intersect each other is a type of planar graph.
- These type of graph can be divided into faces(The region in a graph formed without intersection by vertices and edges).
- [Examples and Questions](obsidian://open?vault=Obsidian%20Vault&file=1st%20semester%2FDiscrete%20Structure%2FMFCS-complete-handwritten-note-compressed1.pdf&page=113)
#### 3. Subgraph:
- The subset of a graph is sub-graph.
- We can take a few vertices or edges from a graph and create a sub graph.
## 5.5 Transport Network, Max-Flow and Min-Cut Theorem
### Transport Network
A transport Network is a connected, weighted, directed graph with following properties:
1. There is one source, a vertex with no incoming edges.
2. There is one sink, a vertex with no outgoing edges.
3. Each weight is assigned a non-negative weight.
### Max-flow and Min-Cut Theorem
#### Max-Flow:
The Max-Flow problem is to find the maximum amount of flow that can be sent from the source to the sink in a flow network.
#### Min-Cut:
A cut in a flow network is a partition of the nodes into two disjoint sets, one containing the source and the other containing the sink.
The capacity of a cut is the sum of the capacities of the edges crossing the cut.
#### Max-Flow Min-Cut Theorem: #important
The theorem states that the maximum flow in a network is equal to the minimum capacity of a cut in the network.
Mathematically, the maximum flow is equal to the minimum cut.
"The maximum flow though any network from a given source to a given sink is exactly the sum of the edge weights, if removed, would totally disconnect the source from the sink."
$$Min-cut = Max\ flow$$
##### Applications of Max-Flow Min-Cut Theorem:
1. In computer science, network reliability, availability and connectivity use max-flow min-cut theorem.
2. In mathematics, matching in graphs uses this algorithm.
3. Scheduling tasks uses this
4. Example: Aeroplane decides when to allow planes to leave airport to maximize the "flow" of flights. 
## 5.6 Applications of graph theory (DPSID)
1. **Data Structure:**
    - Graphs are fundamental data structures used to represent relationships between data elements.
    - Commonly employed in scenarios where entities have connections or dependencies.
2. **Path Finding Algorithm:**
    - Graph algorithms, such as Dijkstra's and A* algorithms, are widely used for finding the shortest paths between nodes in various applications.
    - Navigation systems, logistics, and network routing heavily rely on these algorithms.
3. **Social Network Analysis:**
    - Graphs model relationships between individuals in a social network.
    - Used to analyze the structure of social connections, identify influential individuals, and understand information flow.
4. **Image Processing:**
    - Image segmentation and object recognition often use graph-based approaches.
    - Pixels or image regions are represented as nodes, and edges define relationships based on similarities, enabling efficient image analysis.
5. **Database Management:**
    - Graph databases use graph structures to represent and store data.
    - Useful for managing complex relationships in data, making it easier to query and traverse relationships between entities.

___________________________________
# Unit VI: Language, Grammar and Automata (7 hrs)
## 6.1 Language and Grammars
### Language
The theory of formal language provides a mathematical model to our natural languages. These models are used to develop language and used to communicate with computers.
To define a language we start with the following:
1. *Input Symbols*: They can be any letter, number or symbols.
2. *ALPHABET:* It is the collection of input symbols. It is denoted by $\sum$.
        *Power of an Alphabet:* Let A be an alphabet. Then the set of all possible string of length 'k' obtained from elements of k is called $k^{th}$ power of A and denoted by $A^k$.
3. *STRING*: It is the combination of multiple occurrence of input signals.
        *Empty String:* No occurrence of input symbols. Denoted by $\lambda$ or $\epsilon$
4. *Length of word:* The number of elements or letters involved in the string is called it's length. It is denoted by $l(w)$ or $lw$. 
5. *LANGUAGE:* The collection of all possible string over some given alphabet. It is denoted by L.
[Formal Languages](https://youtu.be/7MBpk4gJRkk?list=PLDDGPdw7e6Ag1EIznZ-m-qXu4XX3A0cIz)
#### Operations on Language
Since language are a set of strings, the set operations can be used to obtain new language.
### Grammars
Grammar consists of 4 component which can be represented as (T,N,S,P):
1. T is a finite set of elements called terminals.
2. N is a finite set of elements called non-terminals or variables, where $N\cap T = \phi$ 
3. S is a special non-terminal in N, called starting symbol.
4. P is a finite state of productions.
Production is an ordered pair $(\alpha, \beta)$, where $\alpha, \beta$ are words $N\cup T$ 
#### Types of Grammar
Sometimes G=(V, T, S, P) where,
V = Set of variables / Non-terminal
T = Set of terminals
S = Start symbol
P = Product rule for V and T and at least one symbol of $\beta$ belongs to V
Types of Grammar:
1. Type 0 Grammar (Unrestricted Grammar):  
    This type of grammar generates all possible languages and is the most powerful grammar. It has no restrictions on the form of its production rules.  
    Example Grammar: S -> aSb | ε  
    Example Language: { $a^nb^n$ | n >= 0 }
    
2. Type 1 Grammar (Context-Sensitive Grammar):  
    This type of grammar generates languages that can be recognized by a linear bounded automaton. Its production rules have a specific form where the left-hand side of the rule contains one non-terminal symbol and the right-hand side of the rule contains a string of non-terminal and terminal symbols, with the length of the right-hand side not less than the length of the left-hand side.  
    Example Grammar: 
    S -> aB | Ba  
    B -> bC | ε  
    C -> Ca | b  
    Example Language: { $a^nb^mc^k$ | n >= m & m <= k }  
    
3. Type 2 Grammar (Context-Free Grammar):  
    This type of grammar generates languages that can be recognized by a pushdown automaton. Its production rules have a specific form where the left-hand side of the rule contains one non-terminal symbol and the right-hand side of the rule contains a string of non-terminal and terminal symbols, with no restrictions on the length of the right-hand side.  
    Example Grammar: 
    S -> AB  
    A -> aA | ε  
    B -> bB | ε  
    Example Language: { $a^nb^m$ | n,m >= 0 }  
      
    

4. Type 3 Grammar (Regular Grammar):  
    This type of grammar generates languages that can be recognized by a finite automaton. Its production rules have a specific form where the left-hand side of the rule contains one non-terminal symbol and the right-hand side of the rule contains a single terminal symbol or a terminal symbol followed by a single non-terminal symbol. The non-terminal symbol only appears at the end of the right-hand side.  
    Example Grammar: S -> aA | bS | ε  
    A -> aA | bA | ε  
    Example Language: { (a+b)* }


## 6.3 Finite State Automata
### Automata
Automata: Automata Theory is the study of abstract computational devices.
Automation: An abstract computing device
Automata is an abstract computing device which follows a predetermined sequence of operations automatically.
An automation with a finite no of states is called a finite automation (FA) or finite state automation (FSM).
### Finite State Automata
A *finite state automata* is a mathematical model used to determine whether a string is accepted or not. It is also called language recognizer. It is the simplest model of computation. It has a very limited memory.
Mathematically, FSA is defined as: $Q,\sum,O,F,G$
Q=> Finite set of steps
$\sum$=> Input alphabet
$q_0$=> Starting state
$\delta$ => Transition function
$F$=> Finite set of final state or accepting state
#### Types of finite state automata
1. Deterministic Finite automata (DFA)
2. Non-deterministic Finite automata (NDFA)

### Transition Graph and Transition Table
#### Transition Graph
It is represented using the weighted directed graph where states are represented by vertices.
#### Transition Table
It is a tabular representation of transition function of finite automata.


## Deterministic Finite Automata
- DFA refers to deterministic finite automata. Deterministic refers to the uniqueness of the computation. The finite automata are called deterministic finite automata if the machine reads an input string one symbol at a time.
- In DFA, there is only one path for specific input from the current state to the next state.
- DFA does not accept the null move, i.e., the DFA cannot change state without any input character.
- DFA can contain multiple final states. It is used in Lexical Analysis in Compiler.
- Lexical analysis is the starting phase of the compiler. It gathers modified source code that is written in the form of sentences from the language preprocessor. The lexical analyzer is responsible for breaking these syntaxes into a series of tokens, by removing whitespace in the source code.
*Formal Definition of DFA*
- A DFA is a collection of 5-tuples the same as we described in the definition of FA.
- Q: finite set of states  
- ∑: finite set of the input symbol  
- q0: initial state   
- F: final state  
- δ: Transition function
- δ: Q x ∑→Q

## Non-Deterministic Finite Automata
- NFA stands for non-deterministic finite automata. It is easy to construct an NFA than DFA for a given regular language.
- The finite automata are called NFA when there exist many paths for specific input from the current state to the next state.
- Every NFA is not DFA, but each NFA can be translated into DFA.
- NFA is defined in the same way as DFA but with the following two exceptions, it contains multiple next states for same inputs, and it contains ε transition.
    ![](https://lh7-us.googleusercontent.com/26Kndw66Xab5D2oVh8-iY3Xrd5nfVSMrldsqELymfxihoVpRnTRVeMl54E7VskRgAuUpM9Rys4NtlNwI1MxqkKkJzWF-e7hm9YQMIGcsClwVfMbzzUTexV_khDq2KF_rScc0Wxdu39X7GGzj8YEAWA)
*Formal definition of NFA:*
- NFA also has five states same as DFA, but with different transition function, as shown follows:
- Q: finite set of states  
- ∑: finite set of the input symbol  
- q0: initial state   
- F: final state  
- δ: Transition function  
- δ: Q x ∑ →$2^Q$

### Differences between DFA and NFA #important 
|  | DFA | NFA |
| ---- | ---- | ---- |
| Abbreviation | Deterministic Finite Automata | Nondeterministic Finite Automata |
| Symbol Transition | One state transition per symbolic representation | No need to specify how it reacts to symbols |
| Empty String Transition | Cannot use | Can use |
| Machine Complexity | One machine | Multiple little machines computing simultaneously |
| Next State | Distinctly set | Multiple possible next states for each pair |
| Construction | More difficult | Easier to construct |
| String Rejection | If terminates in a non-accepting state | If all branches die or refuse the string |
| Execution Time | Less | More |
| Inclusion | All DFA are NFA | Not all NFA are DFA |
| Space Requirement | More | Less |
| Dead Configuration | Not allowed | Allowed |
| Backtracking | Allowed | Not always possible |
| Regular Expression Conversion | Difficult | Simpler compared to DFA |
| Epsilon Move | Not allowed | Allowed |
## Regular Expressions:
A regular expression is a sequence of characters that represents a pattern of text. Regular expressions can be used to describe regular languages, which can be generated by regular grammars.
In terms of grammar, a regular expression can be viewed as a shorthand notation for a regular grammar. The regular expression specifies the set of strings that are generated by the regular grammar.
For example, consider the regular expression (a|b)$*$. This regular expression describes a language that consists of zero or more occurrences of the letters 'a' or 'b'.
We can convert this regular expression into a regular grammar by following these steps:
1. Start with a single start symbol S.
2. Add a production rule S -> ε to allow the empty string in the language.
3. For each character in the regular expression, create a new non-terminal symbol and add a production rule that generates that character. In this case, we create two non-terminal symbols A and B, with the rules A -> a and B -> b.
4. Add a production rule S -> A | B to generate either 'a' or 'b'.
5. Add a production rule that allows repetition. In this case, we add the rule S -> S | SA | SB to allow zero or more repetitions of the previous step.
The resulting regular grammar is:
S -> ε | A | B | S A | S B
A -> a
B -> b
This grammar generates the same language as the original regular expression, which is the set of all strings consisting of zero or more occurrences of the letters 'a' or 'b'.

