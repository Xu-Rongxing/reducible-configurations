/* Runtime data, mechanically formatted for focused proof updates. */
(function(root){ const data={
  "claims": [
    {
      "claim": 1,
      "statementTex": "G\\text{ has minimum degree at least }3.",
      "statementSourceTex": "$G$ has minimum degree at least $3$.",
      "cases": [
        {
          "branch": "degree-0",
          "caseTex": "d_G(v)=0",
          "labels": {
            "1": "v"
          },
          "layout": {
            "kind": "single-retained-vertex",
            "positions": {
              "1": [
                0.5,
                0.5
              ]
            },
            "externalColoredNeighbors": 0
          },
          "notesTex": "\\text{This is a direct greedy extension, not an application of the nice-subgraph lemma. After coloring }G-v,\\ |L_{\\rm avail}(v)|\\ge 15m+4t-0(4m+t)\\ge4m+t.\\ \\text{The original proof has no }\\Omega.",
          "operations": [
            {
              "kind": "greedy-extension",
              "auditKind": "d",
              "vertex": 1,
              "tex": "\\text{choose }4m+t\\text{ available colors for }v"
            }
          ]
        },
        {
          "branch": "degree-1",
          "caseTex": "d_G(v)=1",
          "labels": {
            "1": "v"
          },
          "layout": {
            "kind": "single-retained-vertex",
            "positions": {
              "1": [
                0.5,
                0.5
              ]
            },
            "externalColoredNeighbors": 1
          },
          "notesTex": "\\text{This is a direct greedy extension, not an application of the nice-subgraph lemma. After coloring }G-v,\\ |L_{\\rm avail}(v)|\\ge 15m+4t-1(4m+t)\\ge4m+t.\\ \\text{The original proof has no }\\Omega.",
          "operations": [
            {
              "kind": "greedy-extension",
              "auditKind": "d",
              "vertex": 1,
              "tex": "\\text{choose }4m+t\\text{ available colors for }v"
            }
          ]
        },
        {
          "branch": "degree-2",
          "caseTex": "d_G(v)=2",
          "labels": {
            "1": "v"
          },
          "layout": {
            "kind": "single-retained-vertex",
            "positions": {
              "1": [
                0.5,
                0.5
              ]
            },
            "externalColoredNeighbors": 2
          },
          "notesTex": "\\text{This is a direct greedy extension, not an application of the nice-subgraph lemma. After coloring }G-v,\\ |L_{\\rm avail}(v)|\\ge 15m+4t-2(4m+t)\\ge4m+t.\\ \\text{The original proof has no }\\Omega.",
          "operations": [
            {
              "kind": "greedy-extension",
              "auditKind": "d",
              "vertex": 1,
              "tex": "\\text{choose }4m+t\\text{ available colors for }v"
            }
          ]
        }
      ]
    },
    {
      "claim": 2,
      "statementTex": "\\text{For each }k\\in\\{3,4,5,6\\},\\text{ every }k\\text{-vertex of }G\\text{ has at most }k-2\\text{ neighbors of degree }3.\\ \\text{In particular, }G\\text{ contains no }(3,3,3)\\text{-path.",
      "statementSourceTex": "For each $k\\in\\{3,4,5,6\\}$, every $k$-vertex of $G$ has at most $k-2$ neighbors of degree $3$. In particular, $G$ contains no $(3,3,3)$-path.",
      "cases": [
        {
          "branch": "k-3",
          "caseTex": "k=3,\\quad H=G[u,v_1,\\ldots,v_{2}]",
          "labels": {
            "1": "u",
            "2": "v_{1}",
            "3": "v_{2}"
          },
          "layout": {
            "kind": "star",
            "positions": {
              "1": [
                0.24,
                0.5
              ],
              "2": [
                0.78,
                0.18
              ],
              "3": [
                0.78,
                0.8200000000000001
              ]
            }
          },
          "notesTex": "\\text{Apply the saving/deletion pair once for each }i=1,\\ldots,1.\\ \\text{Do not repeat overlapping endpoints in the manuscript's ellipsis.}",
          "operations": [
            {
              "kind": "saving",
              "auditKind": "p",
              "source": 1,
              "target": 2,
              "amountTex": "m",
              "tex": "\\langle u\\mid v_{1},m\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 2,
              "tex": "\\langle v_{1}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 1,
              "tex": "\\langle u\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 3,
              "tex": "\\langle v_{2}\\rangle"
            }
          ]
        },
        {
          "branch": "k-4",
          "caseTex": "k=4,\\quad H=G[u,v_1,\\ldots,v_{3}]",
          "labels": {
            "1": "u",
            "2": "v_{1}",
            "3": "v_{2}",
            "4": "v_{3}"
          },
          "layout": {
            "kind": "star",
            "positions": {
              "1": [
                0.24,
                0.5
              ],
              "2": [
                0.78,
                0.18
              ],
              "3": [
                0.78,
                0.5
              ],
              "4": [
                0.78,
                0.8200000000000001
              ]
            }
          },
          "notesTex": "\\text{Apply the saving/deletion pair once for each }i=1,\\ldots,2.\\ \\text{Do not repeat overlapping endpoints in the manuscript's ellipsis.}",
          "operations": [
            {
              "kind": "saving",
              "auditKind": "p",
              "source": 1,
              "target": 2,
              "amountTex": "m",
              "tex": "\\langle u\\mid v_{1},m\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 2,
              "tex": "\\langle v_{1}\\rangle"
            },
            {
              "kind": "saving",
              "auditKind": "p",
              "source": 1,
              "target": 3,
              "amountTex": "m",
              "tex": "\\langle u\\mid v_{2},m\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 3,
              "tex": "\\langle v_{2}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 1,
              "tex": "\\langle u\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 4,
              "tex": "\\langle v_{3}\\rangle"
            }
          ]
        },
        {
          "branch": "k-5",
          "caseTex": "k=5,\\quad H=G[u,v_1,\\ldots,v_{4}]",
          "labels": {
            "1": "u",
            "2": "v_{1}",
            "3": "v_{2}",
            "4": "v_{3}",
            "5": "v_{4}"
          },
          "layout": {
            "kind": "star",
            "positions": {
              "1": [
                0.24,
                0.5
              ],
              "2": [
                0.78,
                0.18
              ],
              "3": [
                0.78,
                0.3933333333333333
              ],
              "4": [
                0.78,
                0.6066666666666667
              ],
              "5": [
                0.78,
                0.8200000000000001
              ]
            }
          },
          "notesTex": "\\text{Apply the saving/deletion pair once for each }i=1,\\ldots,3.\\ \\text{Do not repeat overlapping endpoints in the manuscript's ellipsis.}",
          "operations": [
            {
              "kind": "saving",
              "auditKind": "p",
              "source": 1,
              "target": 2,
              "amountTex": "m",
              "tex": "\\langle u\\mid v_{1},m\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 2,
              "tex": "\\langle v_{1}\\rangle"
            },
            {
              "kind": "saving",
              "auditKind": "p",
              "source": 1,
              "target": 3,
              "amountTex": "m",
              "tex": "\\langle u\\mid v_{2},m\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 3,
              "tex": "\\langle v_{2}\\rangle"
            },
            {
              "kind": "saving",
              "auditKind": "p",
              "source": 1,
              "target": 4,
              "amountTex": "m",
              "tex": "\\langle u\\mid v_{3},m\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 4,
              "tex": "\\langle v_{3}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 1,
              "tex": "\\langle u\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 5,
              "tex": "\\langle v_{4}\\rangle"
            }
          ]
        },
        {
          "branch": "k-6",
          "caseTex": "k=6,\\quad H=G[u,v_1,\\ldots,v_{5}]",
          "labels": {
            "1": "u",
            "2": "v_{1}",
            "3": "v_{2}",
            "4": "v_{3}",
            "5": "v_{4}",
            "6": "v_{5}"
          },
          "layout": {
            "kind": "star",
            "positions": {
              "1": [
                0.24,
                0.5
              ],
              "2": [
                0.78,
                0.18
              ],
              "3": [
                0.78,
                0.33999999999999997
              ],
              "4": [
                0.78,
                0.5
              ],
              "5": [
                0.78,
                0.6599999999999999
              ],
              "6": [
                0.78,
                0.8200000000000001
              ]
            }
          },
          "notesTex": "\\text{In the first operation, }a=|S|+|R|,\\ b=|T|+|R|,\\ a+b=m+|R|.\\ \\text{The amounts at }v_1,v_2\\text{ are not fixed individually.}",
          "operations": [
            {
              "kind": "pair",
              "auditKind": "q",
              "sources": [
                2,
                3
              ],
              "target": 1,
              "amountTex": "m",
              "tex": "\\langle\\{v_{1},v_{2}\\}\\mid u,m\\rangle^{*}"
            },
            {
              "kind": "saving",
              "auditKind": "p",
              "source": 1,
              "target": 4,
              "amountTex": "m",
              "tex": "\\langle u\\mid v_{3},m\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 4,
              "tex": "\\langle v_{3}\\rangle"
            },
            {
              "kind": "saving",
              "auditKind": "p",
              "source": 1,
              "target": 5,
              "amountTex": "m",
              "tex": "\\langle u\\mid v_{4},m\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 5,
              "tex": "\\langle v_{4}\\rangle"
            },
            {
              "kind": "saving",
              "auditKind": "p",
              "source": 1,
              "target": 6,
              "amountTex": "m",
              "tex": "\\langle u\\mid v_{5},m\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 6,
              "tex": "\\langle v_{5}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 1,
              "tex": "\\langle u\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 2,
              "tex": "\\langle v_{1}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 3,
              "tex": "\\langle v_{2}\\rangle"
            }
          ]
        }
      ]
    },
    {
      "claim": 3,
      "statementTex": "\\text{Suppose }k\\in\\{4,5,6\\}.\\ \\text{If a }k\\text{-vertex of }G\\text{ has }k-2\\text{ neighbors of degree }3,\\text{ then none of these }k-2\\text{ vertices has a }3\\text{-neighbor. In particular, }G\\text{ contains no }(3,3,4,3)\\text{-path.",
      "statementSourceTex": "Suppose that $k\\in\\{4,5,6\\}$. If a $k$-vertex of $G$ has $k-2$ neighbors of degree $3$, then none of these $k-2$ vertices has a $3$-neighbor. In particular, $G$ contains no $(3,3,4,3)$-path.",
      "cases": [
        {
          "branch": "k-4",
          "caseTex": "k=4,\\quad F_H[\\{u,v_2,\\ldots,v_{2}\\}]\\cong P_2",
          "labels": {
            "1": "u",
            "2": "u_1",
            "3": "v_1",
            "4": "v_{2}"
          },
          "layout": {
            "kind": "star-with-subdivided-arm",
            "positions": {
              "1": [
                0.47,
                0.5
              ],
              "2": [
                0.07,
                0.5
              ],
              "3": [
                0.27,
                0.5
              ],
              "4": [
                0.86,
                0.5
              ]
            }
          },
          "notesTex": "U_H=\\{v_1\\}.\\quad u_1\\text{ is isolated in }F_H.\\quad u_1v_i\\notin E(G)\\text{ for }2\\le i\\le 2.",
          "operations": [
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 4,
              "tex": "\\langle v_{2}\\rangle"
            },
            {
              "kind": "saving",
              "auditKind": "p",
              "source": 3,
              "target": 2,
              "amountTex": "m",
              "tex": "\\langle v_{1}\\mid u_1,m\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 2,
              "tex": "\\langle u_1\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 3,
              "tex": "\\langle v_{1}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 1,
              "tex": "\\langle u\\rangle"
            }
          ]
        },
        {
          "branch": "k-5",
          "caseTex": "k=5,\\quad F_H[\\{u,v_2,\\ldots,v_{3}\\}]\\cong P_3",
          "labels": {
            "1": "u",
            "2": "u_1",
            "3": "v_1",
            "4": "v_{2}",
            "5": "v_{3}"
          },
          "layout": {
            "kind": "star-with-subdivided-arm",
            "positions": {
              "1": [
                0.47,
                0.5
              ],
              "2": [
                0.07,
                0.5
              ],
              "3": [
                0.27,
                0.5
              ],
              "4": [
                0.86,
                0.18
              ],
              "5": [
                0.86,
                0.8200000000000001
              ]
            }
          },
          "notesTex": "U_H=\\{v_1\\}.\\quad u_1\\text{ is isolated in }F_H.\\quad u_1v_i\\notin E(G)\\text{ for }2\\le i\\le 3.",
          "operations": [
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 4,
              "tex": "\\langle v_{2}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 5,
              "tex": "\\langle v_{3}\\rangle"
            },
            {
              "kind": "saving",
              "auditKind": "p",
              "source": 3,
              "target": 2,
              "amountTex": "m",
              "tex": "\\langle v_{1}\\mid u_1,m\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 2,
              "tex": "\\langle u_1\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 3,
              "tex": "\\langle v_{1}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 1,
              "tex": "\\langle u\\rangle"
            }
          ]
        },
        {
          "branch": "k-6",
          "caseTex": "k=6,\\quad F_H[\\{u,v_2,\\ldots,v_{4}\\}]\\cong K_{1,3}",
          "labels": {
            "1": "u",
            "2": "u_1",
            "3": "v_1",
            "4": "v_{2}",
            "5": "v_{3}",
            "6": "v_{4}"
          },
          "layout": {
            "kind": "star-with-subdivided-arm",
            "positions": {
              "1": [
                0.47,
                0.5
              ],
              "2": [
                0.07,
                0.5
              ],
              "3": [
                0.27,
                0.5
              ],
              "4": [
                0.86,
                0.18
              ],
              "5": [
                0.86,
                0.5
              ],
              "6": [
                0.86,
                0.8200000000000001
              ]
            }
          },
          "notesTex": "U_H=\\{v_1\\}.\\quad u_1\\text{ is isolated in }F_H.\\quad u_1v_i\\notin E(G)\\text{ for }2\\le i\\le 4.",
          "operations": [
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 4,
              "tex": "\\langle v_{2}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 5,
              "tex": "\\langle v_{3}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 6,
              "tex": "\\langle v_{4}\\rangle"
            },
            {
              "kind": "saving",
              "auditKind": "p",
              "source": 3,
              "target": 2,
              "amountTex": "m",
              "tex": "\\langle v_{1}\\mid u_1,m\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 2,
              "tex": "\\langle u_1\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 3,
              "tex": "\\langle v_{1}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 1,
              "tex": "\\langle u\\rangle"
            }
          ]
        }
      ]
    },
    {
      "claim": 4,
      "statementTex": "G\\text{ contains no }(4^-,4^-,4^-,3)\\text{-cycle.}",
      "statementSourceTex": "$G$ contains no $(4^-,4^-,4^-,3)$-cycle.",
      "cases": [
        {
          "branch": "case-1",
          "caseTex": "(d_G(v_1),d_G(v_2),d_G(v_3),d_G(v_4))=(3,4,4,4)",
          "labels": {
            "1": "v_{1}",
            "2": "v_{2}",
            "3": "v_{3}",
            "4": "v_{4}"
          },
          "layout": {
            "kind": "cycle-with-external-leaves",
            "positions": {
              "1": [
                0.32,
                0.22
              ],
              "2": [
                0.76,
                0.22
              ],
              "3": [
                0.76,
                0.78
              ],
              "4": [
                0.32,
                0.78
              ]
            },
            "notes": "Straight cycle sides. Additional leaves lie to the left of v1, outside the cycle."
          },
          "notesTex": "H=v_1v_2v_3v_4v_1.\\quad d_G(v_2)=4\\text{ is chosen without loss of generality.}",
          "operations": [
            {
              "kind": "pair",
              "auditKind": "q",
              "sources": [
                2,
                4
              ],
              "target": 1,
              "amountTex": "m",
              "tex": "\\langle\\{v_{2},v_{4}\\}\\mid v_{1},m\\rangle^{*}"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 1,
              "tex": "\\langle v_{1}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 2,
              "tex": "\\langle v_{2}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 4,
              "tex": "\\langle v_{4}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 3,
              "tex": "\\langle v_{3}\\rangle"
            }
          ]
        },
        {
          "branch": "case-2",
          "caseTex": "(d_G(v_1),d_G(v_2),d_G(v_3),d_G(v_4))=(3,4,4,3)",
          "labels": {
            "1": "v_{1}",
            "2": "v_{2}",
            "3": "v_{3}",
            "4": "v_{4}"
          },
          "layout": {
            "kind": "cycle-with-external-leaves",
            "positions": {
              "1": [
                0.32,
                0.22
              ],
              "2": [
                0.76,
                0.22
              ],
              "3": [
                0.76,
                0.78
              ],
              "4": [
                0.32,
                0.78
              ]
            },
            "notes": "Straight cycle sides. Additional leaves lie to the left of v1, outside the cycle."
          },
          "notesTex": "H=v_1v_2v_3v_4v_1.\\quad d_G(v_2)=4\\text{ is chosen without loss of generality.}",
          "operations": [
            {
              "kind": "pair",
              "auditKind": "q",
              "sources": [
                2,
                4
              ],
              "target": 1,
              "amountTex": "m",
              "tex": "\\langle\\{v_{2},v_{4}\\}\\mid v_{1},m\\rangle^{*}"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 1,
              "tex": "\\langle v_{1}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 2,
              "tex": "\\langle v_{2}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 4,
              "tex": "\\langle v_{4}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 3,
              "tex": "\\langle v_{3}\\rangle"
            }
          ]
        },
        {
          "branch": "case-3",
          "caseTex": "(d_G(v_1),d_G(v_2),d_G(v_3),d_G(v_4))=(3,4,3,4)",
          "labels": {
            "1": "v_{1}",
            "2": "v_{2}",
            "3": "v_{3}",
            "4": "v_{4}"
          },
          "layout": {
            "kind": "cycle-with-external-leaves",
            "positions": {
              "1": [
                0.32,
                0.22
              ],
              "2": [
                0.76,
                0.22
              ],
              "3": [
                0.76,
                0.78
              ],
              "4": [
                0.32,
                0.78
              ]
            },
            "notes": "Straight cycle sides. Additional leaves lie to the left of v1, outside the cycle."
          },
          "notesTex": "H=v_1v_2v_3v_4v_1.\\quad d_G(v_2)=4\\text{ is chosen without loss of generality.}",
          "operations": [
            {
              "kind": "pair",
              "auditKind": "q",
              "sources": [
                2,
                4
              ],
              "target": 1,
              "amountTex": "m",
              "tex": "\\langle\\{v_{2},v_{4}\\}\\mid v_{1},m\\rangle^{*}"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 1,
              "tex": "\\langle v_{1}\\rangle"
            },
            {
              "kind": "saving",
              "auditKind": "p",
              "source": 3,
              "target": 2,
              "amountTex": "m",
              "tex": "\\langle v_{3}\\mid v_{2},m\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 2,
              "tex": "\\langle v_{2}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 3,
              "tex": "\\langle v_{3}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 4,
              "tex": "\\langle v_{4}\\rangle"
            }
          ]
        }
      ]
    },
    {
      "claim": 5,
      "statementTex": "\\text{No }4_{\\ge1}\\text{-vertex is adjacent to a }4_2\\text{- or }5_3\\text{-vertex.}",
      "statementSourceTex": "No $4_{\\ge 1}$-vertex is adjacent to a $4_2$- or $5_3$-vertex.",
      "cases": [
        {
          "branch": "k-4",
          "caseTex": "d_G(v_1)=4,\\quad v_2\\text{ is a }4_{2}\\text{-vertex},\\quad d_G(v_0)=d_G(v_3)=\\cdots=d_G(v_4)=3.",
          "labels": {
            "1": "v_{0}",
            "2": "v_{1}",
            "3": "v_{2}",
            "4": "v_{3}",
            "5": "v_{4}"
          },
          "layout": {
            "kind": "path-with-star-at-end",
            "positions": {
              "1": [
                0.08,
                0.5
              ],
              "2": [
                0.32,
                0.5
              ],
              "3": [
                0.59,
                0.5
              ],
              "4": [
                0.9,
                0.18
              ],
              "5": [
                0.9,
                0.8200000000000001
              ]
            }
          },
          "notesTex": "v_0\\text{ is a }3\\text{-neighbor of }v_1.\\quad v_3,\\ldots,v_4\\text{ are the }3\\text{-neighbors of }v_2.\\quad v_0v_i\\notin E(G)\\text{ for }3\\le i\\le 4.",
          "operations": [
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 1,
              "tex": "\\langle v_{0}\\rangle"
            },
            {
              "kind": "saving",
              "auditKind": "p",
              "source": 3,
              "target": 4,
              "amountTex": "m",
              "tex": "\\langle v_{2}\\mid v_{3},m\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 4,
              "tex": "\\langle v_{3}\\rangle"
            },
            {
              "kind": "saving",
              "auditKind": "p",
              "source": 3,
              "target": 5,
              "amountTex": "m",
              "tex": "\\langle v_{2}\\mid v_{4},m\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 5,
              "tex": "\\langle v_{4}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 3,
              "tex": "\\langle v_{2}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 2,
              "tex": "\\langle v_{1}\\rangle"
            }
          ]
        },
        {
          "branch": "k-5",
          "caseTex": "d_G(v_1)=4,\\quad v_2\\text{ is a }5_{3}\\text{-vertex},\\quad d_G(v_0)=d_G(v_3)=\\cdots=d_G(v_5)=3.",
          "labels": {
            "1": "v_{0}",
            "2": "v_{1}",
            "3": "v_{2}",
            "4": "v_{3}",
            "5": "v_{4}",
            "6": "v_{5}"
          },
          "layout": {
            "kind": "path-with-star-at-end",
            "positions": {
              "1": [
                0.08,
                0.5
              ],
              "2": [
                0.32,
                0.5
              ],
              "3": [
                0.59,
                0.5
              ],
              "4": [
                0.9,
                0.18
              ],
              "5": [
                0.9,
                0.5
              ],
              "6": [
                0.9,
                0.8200000000000001
              ]
            }
          },
          "notesTex": "v_0\\text{ is a }3\\text{-neighbor of }v_1.\\quad v_3,\\ldots,v_5\\text{ are the }3\\text{-neighbors of }v_2.\\quad v_0v_i\\notin E(G)\\text{ for }3\\le i\\le 5.",
          "operations": [
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 1,
              "tex": "\\langle v_{0}\\rangle"
            },
            {
              "kind": "saving",
              "auditKind": "p",
              "source": 3,
              "target": 4,
              "amountTex": "m",
              "tex": "\\langle v_{2}\\mid v_{3},m\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 4,
              "tex": "\\langle v_{3}\\rangle"
            },
            {
              "kind": "saving",
              "auditKind": "p",
              "source": 3,
              "target": 5,
              "amountTex": "m",
              "tex": "\\langle v_{2}\\mid v_{4},m\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 5,
              "tex": "\\langle v_{4}\\rangle"
            },
            {
              "kind": "saving",
              "auditKind": "p",
              "source": 3,
              "target": 6,
              "amountTex": "m",
              "tex": "\\langle v_{2}\\mid v_{5},m\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 6,
              "tex": "\\langle v_{5}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 3,
              "tex": "\\langle v_{2}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 2,
              "tex": "\\langle v_{1}\\rangle"
            }
          ]
        }
      ]
    },
    {
      "claim": 6,
      "statementTex": "\\text{No }5_{\\ge2}\\text{-vertex has a }4_2\\text{-neighbor.}",
      "statementSourceTex": "No $5_{\\geq 2}$-vertex has a $4_2$-neighbor.",
      "cases": [
        {
          "branch": "main",
          "caseTex": "d_G(v_1)=5,\\quad v_2\\text{ is a }4_2\\text{-vertex},\\quad d_G(v_3)=d_G(v_4)=d_G(v_5)=d_G(v_6)=3.",
          "labels": {
            "1": "v_{1}",
            "2": "v_{2}",
            "3": "v_{3}",
            "4": "v_{4}",
            "5": "v_{5}",
            "6": "v_{6}"
          },
          "layout": {
            "kind": "double-star",
            "positions": {
              "1": [
                0.37,
                0.5
              ],
              "2": [
                0.63,
                0.5
              ],
              "3": [
                0.12,
                0.18
              ],
              "4": [
                0.12,
                0.82
              ],
              "5": [
                0.88,
                0.18
              ],
              "6": [
                0.88,
                0.82
              ]
            }
          },
          "notesTex": "\\{v_3,v_4\\}\\text{ are }3\\text{-neighbors of }v_1,\\quad \\{v_5,v_6\\}\\text{ are }3\\text{-neighbors of }v_2.\\ \\text{No edges join these two pairs.}",
          "operations": [
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 3,
              "tex": "\\langle v_{3}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 4,
              "tex": "\\langle v_{4}\\rangle"
            },
            {
              "kind": "saving",
              "auditKind": "p",
              "source": 2,
              "target": 5,
              "amountTex": "m",
              "tex": "\\langle v_{2}\\mid v_{5},m\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 5,
              "tex": "\\langle v_{5}\\rangle"
            },
            {
              "kind": "saving",
              "auditKind": "p",
              "source": 2,
              "target": 6,
              "amountTex": "m",
              "tex": "\\langle v_{2}\\mid v_{6},m\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 6,
              "tex": "\\langle v_{6}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 2,
              "tex": "\\langle v_{2}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 1,
              "tex": "\\langle v_{1}\\rangle"
            }
          ]
        }
      ]
    },
    {
      "claim": 7,
      "statementTex": "G\\text{ contains no }(5_{\\ge2},3,3,4)\\text{- or }(6_{\\ge3},3,3,4)\\text{-cycle.}",
      "statementSourceTex": "$G$ contains no $(5_{\\ge 2},3,3,4)$- or $(6_{\\ge 3},3,3,4)$-cycle.",
      "cases": [
        {
          "branch": "k-5",
          "caseTex": "(d_G(v_1),d_G(v_2),d_G(v_3),d_G(v_4))=(5,3,3,4),\\quad d_G(v_i)=3\\ (5\\le i\\le 5).",
          "labels": {
            "1": "v_{1}",
            "2": "v_{2}",
            "3": "v_{3}",
            "4": "v_{4}",
            "5": "v_{5}"
          },
          "layout": {
            "kind": "cycle-with-external-leaves",
            "positions": {
              "1": [
                0.32,
                0.22
              ],
              "2": [
                0.76,
                0.22
              ],
              "3": [
                0.76,
                0.78
              ],
              "4": [
                0.32,
                0.78
              ],
              "5": [
                0.08,
                0.18
              ]
            },
            "notes": "Straight cycle sides. Additional leaves lie to the left of v1, outside the cycle."
          },
          "notesTex": "v_1\\text{ has exactly }2\\text{ neighbors of degree }3.\\quad v_3v_i\\notin E(G)\\text{ for }5\\le i\\le 5.",
          "operations": [
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 5,
              "tex": "\\langle v_{5}\\rangle"
            },
            {
              "kind": "saving",
              "auditKind": "p",
              "source": 3,
              "target": 2,
              "amountTex": "m",
              "tex": "\\langle v_{3}\\mid v_{2},m\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 2,
              "tex": "\\langle v_{2}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 3,
              "tex": "\\langle v_{3}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 1,
              "tex": "\\langle v_{1}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 4,
              "tex": "\\langle v_{4}\\rangle"
            }
          ]
        },
        {
          "branch": "k-6",
          "caseTex": "(d_G(v_1),d_G(v_2),d_G(v_3),d_G(v_4))=(6,3,3,4),\\quad d_G(v_i)=3\\ (5\\le i\\le 6).",
          "labels": {
            "1": "v_{1}",
            "2": "v_{2}",
            "3": "v_{3}",
            "4": "v_{4}",
            "5": "v_{5}",
            "6": "v_{6}"
          },
          "layout": {
            "kind": "cycle-with-external-leaves",
            "positions": {
              "1": [
                0.32,
                0.22
              ],
              "2": [
                0.76,
                0.22
              ],
              "3": [
                0.76,
                0.78
              ],
              "4": [
                0.32,
                0.78
              ],
              "5": [
                0.08,
                0.18
              ],
              "6": [
                0.08,
                0.82
              ]
            },
            "notes": "Straight cycle sides. Additional leaves lie to the left of v1, outside the cycle."
          },
          "notesTex": "v_1\\text{ has exactly }3\\text{ neighbors of degree }3.\\quad v_3v_i\\notin E(G)\\text{ for }5\\le i\\le 6.",
          "operations": [
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 5,
              "tex": "\\langle v_{5}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 6,
              "tex": "\\langle v_{6}\\rangle"
            },
            {
              "kind": "saving",
              "auditKind": "p",
              "source": 3,
              "target": 2,
              "amountTex": "m",
              "tex": "\\langle v_{3}\\mid v_{2},m\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 2,
              "tex": "\\langle v_{2}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 3,
              "tex": "\\langle v_{3}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 1,
              "tex": "\\langle v_{1}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 4,
              "tex": "\\langle v_{4}\\rangle"
            }
          ]
        }
      ]
    },
    {
      "claim": 8,
      "statementTex": "G\\text{ contains no }(5_{\\ge2},3,4,4)\\text{-cycle.}",
      "statementSourceTex": "$G$ contains no $(5_{\\ge 2},3,4,4)$-cycle.",
      "cases": [
        {
          "branch": "noedge",
          "caseTex": "(d_G(v_1),d_G(v_2),d_G(v_3),d_G(v_4),d_G(v_5))=(5,3,4,4,3),\\quad v_3v_5\\notin E(G).",
          "labels": {
            "1": "v_{1}",
            "2": "v_{2}",
            "3": "v_{3}",
            "4": "v_{4}",
            "5": "v_{5}"
          },
          "layout": {
            "kind": "cycle-with-external-leaves",
            "positions": {
              "1": [
                0.32,
                0.22
              ],
              "2": [
                0.76,
                0.22
              ],
              "3": [
                0.76,
                0.78
              ],
              "4": [
                0.32,
                0.78
              ],
              "5": [
                0.08,
                0.18
              ]
            },
            "notes": "Straight cycle sides. Additional leaves lie to the left of v1, outside the cycle."
          },
          "notesTex": "v_5\\text{ is an additional }3\\text{-neighbor of }v_1.",
          "operations": [
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 5,
              "tex": "\\langle v_{5}\\rangle"
            },
            {
              "kind": "pair",
              "auditKind": "q",
              "sources": [
                1,
                3
              ],
              "target": 2,
              "amountTex": "m",
              "tex": "\\langle\\{v_{1},v_{3}\\}\\mid v_{2},m\\rangle^{*}"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 2,
              "tex": "\\langle v_{2}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 1,
              "tex": "\\langle v_{1}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 3,
              "tex": "\\langle v_{3}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 4,
              "tex": "\\langle v_{4}\\rangle"
            }
          ]
        },
        {
          "branch": "edge",
          "caseTex": "(d_G(v_1),d_G(v_2),d_G(v_3),d_G(v_4),d_G(v_5))=(5,3,4,4,3),\\quad v_3v_5\\in E(G).",
          "labels": {
            "1": "v_{1}",
            "2": "v_{2}",
            "3": "v_{3}",
            "4": "v_{4}",
            "5": "v_{5}"
          },
          "layout": {
            "kind": "K2,3-planar",
            "positions": {
              "1": [
                0.12,
                0.5
              ],
              "2": [
                0.5,
                0.13
              ],
              "3": [
                0.88,
                0.5
              ],
              "4": [
                0.5,
                0.87
              ],
              "5": [
                0.5,
                0.5
              ]
            },
            "notes": "Use v1 and v3 as the two ends and v2,v4,v5 as three intermediate vertices. This avoids crossings with straight edges."
          },
          "notesTex": "\\text{The two starred operations make independent choices. Distinguish their sets, for example }S_1,T_1,R_1\\text{ and }S_2,T_2,R_2.",
          "operations": [
            {
              "kind": "pair",
              "auditKind": "q",
              "sources": [
                1,
                3
              ],
              "target": 2,
              "amountTex": "m",
              "tex": "\\langle\\{v_{1},v_{3}\\}\\mid v_{2},m\\rangle^{*}"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 2,
              "tex": "\\langle v_{2}\\rangle"
            },
            {
              "kind": "pair",
              "auditKind": "q",
              "sources": [
                1,
                3
              ],
              "target": 5,
              "amountTex": "m",
              "tex": "\\langle\\{v_{1},v_{3}\\}\\mid v_{5},m\\rangle^{*}"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 5,
              "tex": "\\langle v_{5}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 1,
              "tex": "\\langle v_{1}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 3,
              "tex": "\\langle v_{3}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 4,
              "tex": "\\langle v_{4}\\rangle"
            }
          ]
        }
      ]
    },
    {
      "claim": 9,
      "statementTex": "G\\text{ contains no }(4,4,4,4_{\\ge1})\\text{-cycle.}",
      "statementSourceTex": "$G$ contains no $(4,4,4,4_{\\ge1})$-cycle.",
      "cases": [
        {
          "branch": "S-T-R",
          "caseTex": "d_G(v_1)=d_G(v_2)=d_G(v_3)=d_G(v_4)=4,\\quad d_G(v_5)=3,\\quad v_1v_5\\in E(G),\\ v_3v_5\\notin E(G).",
          "labels": {
            "1": "v_{1}",
            "2": "v_{2}",
            "3": "v_{3}",
            "4": "v_{4}",
            "5": "v_{5}"
          },
          "layout": {
            "kind": "cycle-with-external-leaves",
            "positions": {
              "1": [
                0.32,
                0.22
              ],
              "2": [
                0.76,
                0.22
              ],
              "3": [
                0.76,
                0.78
              ],
              "4": [
                0.32,
                0.78
              ],
              "5": [
                0.08,
                0.18
              ]
            },
            "notes": "Straight cycle sides. Additional leaves lie to the left of v1, outside the cycle."
          },
          "notesTex": "\\text{The two set-assignment steps are separate. The joint loss from }R\\text{ is counted only once.}",
          "operations": [
            {
              "kind": "assign-set",
              "auditKind": "custom-set",
              "source": 2,
              "amountTex": "s+r",
              "colorsTex": "S\\cup R",
              "tex": "\\langle v_2,S\\cup R\\rangle"
            },
            {
              "kind": "assign-set",
              "auditKind": "custom-set",
              "source": 4,
              "amountTex": "q+r",
              "colorsTex": "T\\cup R",
              "tex": "\\langle v_4,T\\cup R\\rangle"
            },
            {
              "kind": "trim",
              "auditKind": "r",
              "vertex": 3,
              "sizeTex": "4m+2t",
              "tex": "\\langle v_3\\downarrow4m+2t\\rangle"
            },
            {
              "kind": "saving",
              "auditKind": "p",
              "source": 2,
              "target": 3,
              "amountTex": "q",
              "tex": "\\langle v_2\\mid v_3,|T|\\rangle"
            },
            {
              "kind": "saving",
              "auditKind": "p",
              "source": 4,
              "target": 3,
              "amountTex": "s",
              "tex": "\\langle v_4\\mid v_3,|S|\\rangle"
            },
            {
              "kind": "saving",
              "auditKind": "p",
              "source": 1,
              "target": 5,
              "amountTex": "m",
              "tex": "\\langle v_1\\mid v_5,m\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 5,
              "tex": "\\langle v_5\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 1,
              "tex": "\\langle v_1\\rangle"
            },
            {
              "kind": "trim",
              "auditKind": "r",
              "vertex": 2,
              "sizeTex": "3m+2t",
              "tex": "\\langle v_2\\downarrow3m+2t\\rangle"
            },
            {
              "kind": "saving",
              "auditKind": "p",
              "source": 3,
              "target": 2,
              "amountTex": "m",
              "tex": "\\langle v_3\\mid v_2,m\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 2,
              "tex": "\\langle v_2\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 3,
              "tex": "\\langle v_3\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 4,
              "tex": "\\langle v_4\\rangle"
            }
          ],
          "custom": {
            "branch": "S-T-R",
            "edges": [
              [
                1,
                2
              ],
              [
                2,
                3
              ],
              [
                3,
                4
              ],
              [
                4,
                1
              ],
              [
                1,
                5
              ]
            ],
            "initial": {
              "1": {
                "fTex": "9m+3t",
                "gTex": "4m+t",
                "degreeG": 4
              },
              "2": {
                "fTex": "5m+2t",
                "gTex": "3m+t",
                "degreeG": 4
              },
              "3": {
                "fTex": "5m+2t",
                "gTex": "2m+t",
                "degreeG": 4
              },
              "4": {
                "fTex": "5m+2t",
                "gTex": "3m+t",
                "degreeG": 4
              },
              "5": {
                "fTex": "7m+2t",
                "gTex": "4m+t",
                "degreeG": 3
              }
            },
            "parametersTex": "s=|S|,\\quad q=|T|,\\quad r=|R|,\\quad s,q,r\\in\\mathbb Z_{\\ge0},\\quad s+q+r=m,\\quad m\\ge1,\\quad t\\in\\{0,1,2,3\\}.",
            "setConstraintsTex": "S\\subseteq L_H(v_2)\\setminus L_H(v_1),\\quad T\\subseteq L_H(v_4)\\setminus L_H(v_1),\\quad R\\subseteq L_H(v_2)\\cap L_H(v_4)\\cap L_H(v_1).",
            "interpretationTex": "\\text{Initial lists have exactly the prescribed sizes. Afterwards fLowerAfter is a guaranteed bound, fUpperAfter is an upper bound, and gAfter is exact. S and T may overlap. All sets refer to the initial }L_H\\text{ in their definitions.}",
            "actions": [
              {
                "kind": "assign-set",
                "auditKind": "custom-set",
                "source": 2,
                "colorsTex": "S\\cup R",
                "amountTex": "s+r",
                "tex": "\\langle v_2,S\\cup R\\rangle",
                "checksTex": [
                  "|L_H(v_2)|+|L_H(v_4)|=10m+4t\\ge(9m+3t)+m,\\quad t\\ge0.",
                  "s+r\\le m\\le3m+t."
                ],
                "notesTex": "S\\cap L_H(v_1)=\\emptyset,\\quad R\\subseteq L_H(v_1).\\ \\text{Only }R\\text{ is removed at }v_1.",
                "fLowerAfter": {
                  "1": "9m+3t-r",
                  "2": "5m+2t-s-r",
                  "3": "5m+2t-s-r",
                  "4": "5m+2t",
                  "5": "7m+2t"
                },
                "fUpperAfter": {
                  "1": "9m+3t-r",
                  "2": "5m+2t-s-r",
                  "3": "5m+2t",
                  "4": "5m+2t",
                  "5": "7m+2t"
                },
                "gAfter": {
                  "1": "4m+t",
                  "2": "3m+t-s-r",
                  "3": "2m+t",
                  "4": "3m+t",
                  "5": "4m+t"
                }
              },
              {
                "kind": "assign-set",
                "auditKind": "custom-set",
                "source": 4,
                "colorsTex": "T\\cup R",
                "amountTex": "q+r",
                "tex": "\\langle v_4,T\\cup R\\rangle",
                "checksTex": [
                  "q+r\\le m\\le3m+t.",
                  "|L_{\\rm current}(v_3)|\\ge5m+2t-|S\\cup T\\cup R|\\ge4m+2t."
                ],
                "notesTex": "\\text{The previously used }R\\text{ is not removed twice. At }v_1\\text{ the list stays }9m+3t-r.\\ \\text{At }v_3\\text{ the joint loss is at most }s+q+r=m.",
                "fLowerAfter": {
                  "1": "9m+3t-r",
                  "2": "5m+2t-s-r",
                  "3": "4m+2t",
                  "4": "5m+2t-q-r",
                  "5": "7m+2t"
                },
                "fUpperAfter": {
                  "1": "9m+3t-r",
                  "2": "5m+2t-s-r",
                  "3": "5m+2t",
                  "4": "5m+2t-q-r",
                  "5": "7m+2t"
                },
                "gAfter": {
                  "1": "4m+t",
                  "2": "3m+t-s-r",
                  "3": "2m+t",
                  "4": "3m+t-q-r",
                  "5": "4m+t"
                }
              },
              {
                "kind": "trim",
                "auditKind": "r",
                "vertex": 3,
                "sizeTex": "4m+2t",
                "tex": "\\langle v_3\\downarrow4m+2t\\rangle",
                "checksTex": [
                  "2m+t\\le4m+2t\\le|L_{\\rm current}(v_3)|."
                ],
                "fLowerAfter": {
                  "1": "9m+3t-r",
                  "2": "5m+2t-s-r",
                  "3": "4m+2t",
                  "4": "5m+2t-q-r",
                  "5": "7m+2t"
                },
                "fUpperAfter": {
                  "1": "9m+3t-r",
                  "2": "5m+2t-s-r",
                  "3": "4m+2t",
                  "4": "5m+2t-q-r",
                  "5": "7m+2t"
                },
                "gAfter": {
                  "1": "4m+t",
                  "2": "3m+t-s-r",
                  "3": "2m+t",
                  "4": "3m+t-q-r",
                  "5": "4m+t"
                }
              },
              {
                "kind": "saving",
                "auditKind": "p",
                "source": 2,
                "target": 3,
                "amountTex": "q",
                "tex": "\\langle v_2\\mid v_3,|T|\\rangle",
                "checksTex": [
                  "|L_{\\rm current}(v_2)|=5m+2t-s-r=4m+2t+q,\\quad |L_{\\rm current}(v_3)|=4m+2t.",
                  "|L(v_2)\\setminus L(v_3)|\\ge q,\\quad g(v_2)=2m+t+q\\ge q."
                ],
                "notesTex": "\\text{If }q=0,\\text{ this operation is the identity.}",
                "fLowerAfter": {
                  "1": "9m+3t-r-q",
                  "2": "4m+2t",
                  "3": "4m+2t",
                  "4": "5m+2t-q-r",
                  "5": "7m+2t"
                },
                "fUpperAfter": {
                  "1": "9m+3t-r",
                  "2": "4m+2t",
                  "3": "4m+2t",
                  "4": "5m+2t-q-r",
                  "5": "7m+2t"
                },
                "gAfter": {
                  "1": "4m+t",
                  "2": "2m+t",
                  "3": "2m+t",
                  "4": "3m+t-q-r",
                  "5": "4m+t"
                }
              },
              {
                "kind": "saving",
                "auditKind": "p",
                "source": 4,
                "target": 3,
                "amountTex": "s",
                "tex": "\\langle v_4\\mid v_3,|S|\\rangle",
                "checksTex": [
                  "|L_{\\rm current}(v_4)|=5m+2t-q-r=4m+2t+s,\\quad |L_{\\rm current}(v_3)|=4m+2t.",
                  "|L(v_4)\\setminus L(v_3)|\\ge s,\\quad g(v_4)=2m+t+s\\ge s."
                ],
                "notesTex": "\\text{If }s=0,\\text{ this operation is the identity. Before the next step, }|L(v_1)|\\ge9m+3t-r-q-s=8m+3t.",
                "fLowerAfter": {
                  "1": "8m+3t",
                  "2": "4m+2t",
                  "3": "4m+2t",
                  "4": "4m+2t",
                  "5": "7m+2t"
                },
                "fUpperAfter": {
                  "1": "9m+3t-r",
                  "2": "4m+2t",
                  "3": "4m+2t",
                  "4": "4m+2t",
                  "5": "7m+2t"
                },
                "gAfter": {
                  "1": "4m+t",
                  "2": "2m+t",
                  "3": "2m+t",
                  "4": "2m+t",
                  "5": "4m+t"
                }
              },
              {
                "kind": "saving",
                "auditKind": "p",
                "source": 1,
                "target": 5,
                "amountTex": "m",
                "tex": "\\langle v_1\\mid v_5,m\\rangle",
                "checksTex": [
                  "|L(v_1)\\setminus L(v_5)|\\ge(8m+3t)-(7m+2t)=m+t\\ge m.",
                  "g(v_1)=4m+t\\ge m."
                ],
                "fLowerAfter": {
                  "1": "7m+3t",
                  "2": "3m+2t",
                  "3": "4m+2t",
                  "4": "3m+2t",
                  "5": "7m+2t"
                },
                "fUpperAfter": {
                  "1": "8m+3t-r",
                  "2": "4m+2t",
                  "3": "4m+2t",
                  "4": "4m+2t",
                  "5": "7m+2t"
                },
                "gAfter": {
                  "1": "3m+t",
                  "2": "2m+t",
                  "3": "2m+t",
                  "4": "2m+t",
                  "5": "4m+t"
                }
              },
              {
                "kind": "delete",
                "auditKind": "d",
                "vertex": 5,
                "tex": "\\langle v_5\\rangle",
                "checksTex": [
                  "|L(v_5)|=7m+2t=(4m+t)+(3m+t)=g(v_5)+g(v_1)."
                ],
                "fLowerAfter": {
                  "1": "7m+3t",
                  "2": "3m+2t",
                  "3": "4m+2t",
                  "4": "3m+2t"
                },
                "fUpperAfter": {
                  "1": "8m+3t-r",
                  "2": "4m+2t",
                  "3": "4m+2t",
                  "4": "4m+2t"
                },
                "gAfter": {
                  "1": "3m+t",
                  "2": "2m+t",
                  "3": "2m+t",
                  "4": "2m+t"
                }
              },
              {
                "kind": "delete",
                "auditKind": "d",
                "vertex": 1,
                "tex": "\\langle v_1\\rangle",
                "checksTex": [
                  "|L(v_1)|\\ge7m+3t=(3m+t)+(2m+t)+(2m+t)=g(v_1)+g(v_2)+g(v_4)."
                ],
                "fLowerAfter": {
                  "2": "3m+2t",
                  "3": "4m+2t",
                  "4": "3m+2t"
                },
                "fUpperAfter": {
                  "2": "4m+2t",
                  "3": "4m+2t",
                  "4": "4m+2t"
                },
                "gAfter": {
                  "2": "2m+t",
                  "3": "2m+t",
                  "4": "2m+t"
                }
              },
              {
                "kind": "trim",
                "auditKind": "r",
                "vertex": 2,
                "sizeTex": "3m+2t",
                "tex": "\\langle v_2\\downarrow3m+2t\\rangle",
                "checksTex": [
                  "g(v_2)=2m+t\\le3m+2t\\le|L_{\\rm current}(v_2)|."
                ],
                "fLowerAfter": {
                  "2": "3m+2t",
                  "3": "4m+2t",
                  "4": "3m+2t"
                },
                "fUpperAfter": {
                  "2": "3m+2t",
                  "3": "4m+2t",
                  "4": "4m+2t"
                },
                "gAfter": {
                  "2": "2m+t",
                  "3": "2m+t",
                  "4": "2m+t"
                }
              },
              {
                "kind": "saving",
                "auditKind": "p",
                "source": 3,
                "target": 2,
                "amountTex": "m",
                "tex": "\\langle v_3\\mid v_2,m\\rangle",
                "checksTex": [
                  "|L(v_3)\\setminus L(v_2)|\\ge(4m+2t)-(3m+2t)=m.",
                  "g(v_3)=2m+t\\ge m,\\quad |L'(v_4)|-g(v_4)\\ge t\\ge0."
                ],
                "fLowerAfter": {
                  "2": "3m+2t",
                  "3": "3m+2t",
                  "4": "2m+2t"
                },
                "fUpperAfter": {
                  "2": "3m+2t",
                  "3": "3m+2t",
                  "4": "4m+2t"
                },
                "gAfter": {
                  "2": "2m+t",
                  "3": "m+t",
                  "4": "2m+t"
                }
              },
              {
                "kind": "delete",
                "auditKind": "d",
                "vertex": 2,
                "tex": "\\langle v_2\\rangle",
                "checksTex": [
                  "|L(v_2)|=3m+2t=(2m+t)+(m+t)=g(v_2)+g(v_3)."
                ],
                "fLowerAfter": {
                  "3": "3m+2t",
                  "4": "2m+2t"
                },
                "fUpperAfter": {
                  "3": "3m+2t",
                  "4": "4m+2t"
                },
                "gAfter": {
                  "3": "m+t",
                  "4": "2m+t"
                }
              },
              {
                "kind": "delete",
                "auditKind": "d",
                "vertex": 3,
                "tex": "\\langle v_3\\rangle",
                "checksTex": [
                  "|L(v_3)|=3m+2t=(m+t)+(2m+t)=g(v_3)+g(v_4)."
                ],
                "fLowerAfter": {
                  "4": "2m+2t"
                },
                "fUpperAfter": {
                  "4": "4m+2t"
                },
                "gAfter": {
                  "4": "2m+t"
                }
              },
              {
                "kind": "delete",
                "auditKind": "d",
                "vertex": 4,
                "tex": "\\langle v_4\\rangle",
                "checksTex": [
                  "|L(v_4)|\\ge2m+2t\\ge2m+t=g(v_4)."
                ],
                "fLowerAfter": {},
                "fUpperAfter": {},
                "gAfter": {}
              }
            ]
          }
        }
      ]
    },
    {
      "claim": 10,
      "statementTex": "G\\text{ contains no }(5_3,3,4,3)\\text{- or }(6_4,3,4,3)\\text{-cycle.}",
      "statementSourceTex": "$G$ contains no $(5_3,3,4,3)$- or $(6_4,3,4,3)$-cycle.",
      "cases": [
        {
          "branch": "k-5",
          "caseTex": "v_1\\text{ is a }5_{3}\\text{-vertex},\\quad d_G(v_2)=d_G(v_4)=3,\\quad d_G(v_3)=4,\\quad d_G(v_i)=3\\ (5\\le i\\le 5).",
          "labels": {
            "1": "v_{1}",
            "2": "v_{2}",
            "3": "v_{3}",
            "4": "v_{4}",
            "5": "v_{5}"
          },
          "layout": {
            "kind": "cycle-with-external-leaves",
            "positions": {
              "1": [
                0.32,
                0.22
              ],
              "2": [
                0.76,
                0.22
              ],
              "3": [
                0.76,
                0.78
              ],
              "4": [
                0.32,
                0.78
              ],
              "5": [
                0.08,
                0.18
              ]
            },
            "notes": "Straight cycle sides. Additional leaves lie to the left of v1, outside the cycle."
          },
          "notesTex": "v_5,\\ldots,v_5\\text{ are the }3\\text{-neighbors of }v_1\\text{ other than }v_2,v_4.\\quad v_3v_i\\notin E(G)\\text{ for }5\\le i\\le 5.",
          "operations": [
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 5,
              "tex": "\\langle v_{5}\\rangle"
            },
            {
              "kind": "pair",
              "auditKind": "q",
              "sources": [
                1,
                3
              ],
              "target": 2,
              "amountTex": "m",
              "tex": "\\langle\\{v_{1},v_{3}\\}\\mid v_{2},m\\rangle^{*}"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 2,
              "tex": "\\langle v_{2}\\rangle"
            },
            {
              "kind": "saving",
              "auditKind": "p",
              "source": 4,
              "target": 3,
              "amountTex": "m",
              "tex": "\\langle v_{4}\\mid v_{3},m\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 3,
              "tex": "\\langle v_{3}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 4,
              "tex": "\\langle v_{4}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 1,
              "tex": "\\langle v_{1}\\rangle"
            }
          ]
        },
        {
          "branch": "k-6",
          "caseTex": "v_1\\text{ is a }6_{4}\\text{-vertex},\\quad d_G(v_2)=d_G(v_4)=3,\\quad d_G(v_3)=4,\\quad d_G(v_i)=3\\ (5\\le i\\le 6).",
          "labels": {
            "1": "v_{1}",
            "2": "v_{2}",
            "3": "v_{3}",
            "4": "v_{4}",
            "5": "v_{5}",
            "6": "v_{6}"
          },
          "layout": {
            "kind": "cycle-with-external-leaves",
            "positions": {
              "1": [
                0.32,
                0.22
              ],
              "2": [
                0.76,
                0.22
              ],
              "3": [
                0.76,
                0.78
              ],
              "4": [
                0.32,
                0.78
              ],
              "5": [
                0.08,
                0.18
              ],
              "6": [
                0.08,
                0.82
              ]
            },
            "notes": "Straight cycle sides. Additional leaves lie to the left of v1, outside the cycle."
          },
          "notesTex": "v_5,\\ldots,v_6\\text{ are the }3\\text{-neighbors of }v_1\\text{ other than }v_2,v_4.\\quad v_3v_i\\notin E(G)\\text{ for }5\\le i\\le 6.",
          "operations": [
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 5,
              "tex": "\\langle v_{5}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 6,
              "tex": "\\langle v_{6}\\rangle"
            },
            {
              "kind": "pair",
              "auditKind": "q",
              "sources": [
                1,
                3
              ],
              "target": 2,
              "amountTex": "m",
              "tex": "\\langle\\{v_{1},v_{3}\\}\\mid v_{2},m\\rangle^{*}"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 2,
              "tex": "\\langle v_{2}\\rangle"
            },
            {
              "kind": "saving",
              "auditKind": "p",
              "source": 4,
              "target": 3,
              "amountTex": "m",
              "tex": "\\langle v_{4}\\mid v_{3},m\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 3,
              "tex": "\\langle v_{3}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 4,
              "tex": "\\langle v_{4}\\rangle"
            },
            {
              "kind": "delete",
              "auditKind": "d",
              "vertex": 1,
              "tex": "\\langle v_{1}\\rangle"
            }
          ]
        }
      ]
    },
    {
      "claim": 11,
      "statementTex": "$G$ contains no $(5_{\\ge2},4,3,4)$-cycle.",
      "cases": [
        {
          "branch": "main",
          "caseTex": "d(v_1)=5,\\quad d(v_2)=d(v_4)=4,\\quad d(v_3)=3",
          "labels": {
            "1": "v_1",
            "2": "v_2",
            "3": "v_3",
            "4": "v_4",
            "5": "v_5",
            "6": "v_6"
          },
          "notesTex": "The starred operation targets $v_3$. After the two saving/deletion pairs for $v_5,v_6$, the ordinary saving move $\\langle v_1\\mid v_2,m\\rangle$ replaces a second starred operation."
        }
      ]
    },
    {
      "claim": 12,
      "statementTex": "$G$ contains no $(5_{\\ge1},4_2,3,4)$-cycle.",
      "cases": [
        {
          "branch": "main",
          "caseTex": "v_1\\text{ is a }5_{\\ge1}\\text{-vertex},\\quad v_2\\text{ is a }4_2\\text{-vertex}",
          "labels": {
            "1": "v_1",
            "2": "v_2",
            "3": "v_3",
            "4": "v_4",
            "5": "v_5",
            "6": "v_6"
          },
          "notesTex": "$v_5$ is a $3$-neighbor of $v_1$, and $v_6\\ne v_3$ is the other $3$-neighbor of $v_2$. All audit indices equal the manuscript subscripts."
        }
      ]
    },
    {
      "claim": 13,
      "statementTex": "$G$ contains no $(5_{\\ge2},4,4_{\\ge1},4)$-cycle.",
      "cases": [
        {
          "branch": "edge",
          "caseTex": "v_6v_7\\in E(G)",
          "labels": {
            "1": "v_1",
            "2": "v_2",
            "3": "v_3",
            "4": "v_4",
            "5": "v_5",
            "6": "v_6",
            "7": "v_7"
          },
          "notesTex": "By symmetry, the possible edge is $v_6v_7$. Trim $v_6$ to $10m+3t$. After deleting $v_1$, apply $\\langle v_3\\mid v_2,2m\\rangle$ and then delete $v_2,v_3,v_4$."
        },
        {
          "branch": "noedge",
          "caseTex": "v_5v_7,v_6v_7\\notin E(G)",
          "labels": {
            "1": "v_1",
            "2": "v_2",
            "3": "v_3",
            "4": "v_4",
            "5": "v_5",
            "6": "v_6",
            "7": "v_7"
          },
          "notesTex": "Both pairs have amount $m$. They occur consecutively, first targeting $v_3$ and then $v_1$, so their size variables must be distinguished."
        }
      ]
    },
    {
      "claim": 14,
      "statementTex": "$G$ contains no $(6_{\\geq 3},4,3,4)$-cycle.",
      "cases": [
        {
          "branch": "adaptive",
          "caseTex": "v_5,v_6,v_7\\text{ are distinct }3\\text{-neighbors of }v_1",
          "labels": {
            "1": "v_1",
            "2": "v_2",
            "3": "v_3",
            "4": "v_4",
            "5": "v_5",
            "6": "v_6",
            "7": "v_7"
          },
          "notesTex": "Before $\\langle v_1\\mid v_7,m\\rangle$, the list of $v_7$ is trimmed to $5m+2t$. Thus $|L(v_1)\\setminus L(v_7)|\\ge(8m+3t-|R_2|)-(5m+2t)=3m+t-|R_2|\\ge m$."
        }
      ]
    },
    {
      "claim": 15,
      "statementTex": "If a $5$-vertex lies on a $(5,3,3,4)$-cycle, then it has no $4_{\\ge 1}$-neighbors other than those on the cycle.",
      "cases": [
        {
          "branch": "distinct",
          "caseTex": "v_6\\ne v_3",
          "labels": {
            "1": "v_1",
            "2": "v_2",
            "3": "v_3",
            "4": "v_4",
            "5": "v_5",
            "6": "v_6"
          },
          "notesTex": "$v_5$ is the $4$-neighbor of $v_1$ outside the cycle, and $v_6$ is its chosen $3$-neighbor."
        },
        {
          "branch": "coincident",
          "caseTex": "v_6=v_3",
          "labels": {
            "1": "v_1",
            "2": "v_2",
            "3": "v_3",
            "4": "v_4",
            "5": "v_5"
          },
          "notesTex": "Only five vertices remain in $H$. The additional edge is $v_5v_3$, and there is no separate node $v_6$."
        }
      ]
    },
    {
      "claim": 16,
      "statementTex": "$G$ contains no $(3,3,4,4,3)$- or $(3,3,4,4,4,3)$-path.",
      "cases": [
        {
          "branch": "k-5",
          "caseTex": "k=5",
          "labels": {
            "1": "v_1",
            "2": "v_2",
            "3": "v_3",
            "4": "v_4",
            "5": "v_5"
          },
          "notesTex": "$H=v_1v_2v_3v_4v_5$ is induced."
        },
        {
          "branch": "k-6",
          "caseTex": "k=6",
          "labels": {
            "1": "v_1",
            "2": "v_2",
            "3": "v_3",
            "4": "v_4",
            "5": "v_5",
            "6": "v_6"
          },
          "notesTex": "$H=v_1v_2v_3v_4v_5v_6$ is induced. The extra saving $\\langle v_3\\mid v_4,m\\rangle$ is required before deleting $v_4$."
        }
      ]
    },
    {
      "claim": 17,
      "statementTex": "$G$ contains no $(3,4,3,4,3)$- or $(3,4,3,4,4,3)$-path.",
      "cases": [
        {
          "branch": "k-5",
          "caseTex": "k=5",
          "labels": {
            "1": "v_1",
            "2": "v_2",
            "3": "v_3",
            "4": "v_4",
            "5": "v_5"
          },
          "notesTex": "The descending deletion block is just $\\langle v_5\\rangle$."
        },
        {
          "branch": "k-6",
          "caseTex": "k=6",
          "labels": {
            "1": "v_1",
            "2": "v_2",
            "3": "v_3",
            "4": "v_4",
            "5": "v_5",
            "6": "v_6"
          },
          "notesTex": "The descending deletion block is $\\langle v_6\\rangle,\\langle v_5\\rangle$."
        }
      ]
    },
    {
      "claim": 18,
      "statementTex": "$G$ contains no $(4_{\\ge 1},4_{\\ge 1},4_{\\ge 1})$-path.",
      "cases": [
        {
          "branch": "main",
          "caseTex": "v_1v_2v_3\\text{ is the path}",
          "labels": {
            "1": "v_1",
            "2": "v_2",
            "3": "v_3",
            "4": "v_4",
            "5": "v_5",
            "6": "v_6"
          },
          "notesTex": "$v_4$ is a $3$-neighbor of $v_1$, $v_5$ of $v_3$, and $v_6$ of $v_2$. The audit graph has precisely the five manuscript edges."
        }
      ]
    },
    {
      "claim": 19,
      "statementTex": "$G$ contains no $(3,4,4,3,4,4,3)$-path.",
      "cases": [
        {
          "branch": "main",
          "caseTex": "H=v_1v_2\\cdots v_7",
          "labels": {
            "1": "v_1",
            "2": "v_2",
            "3": "v_3",
            "4": "v_4",
            "5": "v_5",
            "6": "v_6",
            "7": "v_7"
          },
          "notesTex": "The saving $\\langle v_4\\mid v_3,2m\\rangle$ assigns $2m$, not $m$."
        }
      ]
    },
    {
      "claim": 20,
      "statementTex": "$G$ contains no $(4_2,4,4_{\\ge 1})$- or $(4_2,5_{\\ge 1},4_{\\ge 1})$-path.",
      "cases": [
        {
          "branch": "k-4",
          "caseTex": "k=d(v_4)=4",
          "labels": {
            "1": "v_1",
            "2": "v_2",
            "3": "v_3",
            "4": "v_4",
            "5": "v_5",
            "6": "v_6"
          },
          "notesTex": "The main path is $v_1v_4v_5$, not $v_1v_2v_3$. The $3$-neighbors of $v_1$ are $v_2,v_3$, and the $3$-neighbor of $v_5$ is $v_6$. The first deletions are $v_6,v_5$."
        },
        {
          "branch": "k-5",
          "caseTex": "k=d(v_4)=5",
          "labels": {
            "1": "v_1",
            "2": "v_2",
            "3": "v_3",
            "4": "v_4",
            "5": "v_5",
            "6": "v_6",
            "7": "v_7"
          },
          "notesTex": "$v_7$ is the added $3$-neighbor of $v_4$. The first deletions are $v_7,v_6,v_5$. The main path remains $v_1v_4v_5$."
        }
      ]
    },
    {
      "claim": 21,
      "statementTex": "$G$ contains no $(3_1,5_{\\ge 2},4_{\\ge 1})$-path.",
      "cases": [
        {
          "branch": "main",
          "caseTex": "v_1v_2v_3\\text{ is the path}",
          "labels": {
            "1": "v_1",
            "2": "v_2",
            "3": "v_3",
            "4": "v_4",
            "5": "v_5",
            "6": "v_6"
          },
          "notesTex": "$v_4$ is the $3$-neighbor of $v_1$, $v_5\\ne v_1$ is a $3$-neighbor of $v_2$, and $v_6$ is a $3$-neighbor of $v_3$."
        }
      ]
    },
    {
      "claim": 22,
      "statementTex": "If a $5$-vertex lies on a $(5,3,4,3)$-cycle, then it has no $4_{\\ge 1}$-neighbors.",
      "cases": [
        {
          "branch": "main",
          "caseTex": "$v_1v_2v_3v_4v_1$, $d(v_1)=5$, $d(v_2)=d(v_4)=3$, $d(v_3)=4$, $d(v_5)=4$, $d(v_6)=3$",
          "labels": {
            "1": "v_1",
            "2": "v_2",
            "3": "v_3",
            "4": "v_4",
            "5": "v_5",
            "6": "v_6"
          },
          "notesTex": "$v_1v_5,v_5v_6\\in E(H)$. The pair operation colors $v_1,v_3$ and saves colors at $v_2$."
        }
      ]
    },
    {
      "claim": 23,
      "statementTex": "$G$ contains no $(5_{\\ge2},3_1,4,5_{\\ge1})$-cycle.",
      "statementSourceTex": "$G$ contains no $(5_{\\ge2},3_1,4,5_{\\ge1})$-cycle. Let $v_5\\ne v_2$ be another $3$-neighbor of $v_1$ and $v_6$ be a $3$-neighbor of $v_2$. By Claim 2, $v_6$ has no $3$-neighbor other than $v_2$. Let $v_7$ be a $3$-neighbor of $v_4$. If $v_4v_6\\in E(G)$, we choose $v_7$ to be $v_6$. Otherwise, $v_7\\ne v_6$.",
      "cases": [
        {
          "branch": "case-1",
          "caseTex": "Case 1. $v_4v_6\\in E(G)$ (hence $v_6=v_7$)",
          "labels": {
            "1": "v_1",
            "2": "v_2",
            "3": "v_3",
            "4": "v_4",
            "5": "v_5",
            "6": "v_6"
          },
          "notesTex": "Here $v_6=v_7$. The vertex $v_6$ is adjacent to both $v_2$ and $v_4$."
        },
        {
          "branch": "case-2",
          "caseTex": "Case 2. $v_4v_6\\notin E(G)$ and $v_5v_7\\in E(G)$",
          "labels": {
            "1": "v_1",
            "2": "v_2",
            "3": "v_3",
            "4": "v_4",
            "5": "v_5",
            "6": "v_7",
            "7": "v_6"
          },
          "notesTex": "Here $H=G[v_1,\\ldots,v_7]$ and $U_H=\\{v_2,v_5,v_7\\}$. The components of $F_H$ are $v_1v_4v_3$ and the isolated vertex $v_6$. The move $\\langle v_2\\mid\\{v_3,v_6\\},m\\rangle$ protects both current lists, as in Remark 1."
        },
        {
          "branch": "case-3",
          "caseTex": "Case 3. $v_4v_6\\notin E(G)$ and $v_5v_7\\notin E(G)$",
          "labels": {
            "1": "v_1",
            "2": "v_2",
            "3": "v_3",
            "4": "v_4",
            "5": "v_5",
            "6": "v_7",
            "7": "v_6"
          },
          "notesTex": "Here $H=G[v_1,\\ldots,v_7]$ and $U_H=\\{v_2\\}$. The edges of $F_H$ are $v_1v_4,v_1v_5,v_3v_4,v_4v_7$, and $v_6$ is isolated in $F_H$. Thus $\\Delta(F_H)=3$. The move $\\langle v_2\\mid\\{v_3,v_6\\},m\\rangle$ protects both current lists, as in Remark 1."
        }
      ]
    },
    {
      "claim": 24,
      "statementTex": "$G$ contains no $(5_{\\ge2},3,4_2,5_{\\ge1})$-cycle.",
      "statementSourceTex": "$G$ contains no $(5_{\\ge2},3,4_2,5_{\\ge1})$-cycle. Let $v_5$ be the other $3$-neighbor of $v_3$. Let $v_6$ be a $3$-neighbor of $v_4$ and $v_7\\ne v_2$ be a $3$-neighbor of $v_1$. If $v_1v_5\\in E(G)$, we choose $v_7$ to be $v_5$. Otherwise, $v_7\\ne v_5$.",
      "cases": [
        {
          "branch": "case-1",
          "caseTex": "Case 1. $v_1v_5\\in E(G)$, so $v_7=v_5$",
          "labels": {
            "1": "v_1",
            "2": "v_2",
            "3": "v_3",
            "4": "v_4",
            "5": "v_5",
            "6": "v_6"
          },
          "notesTex": "Here $v_7=v_5$. The vertex $v_5$ is adjacent to both $v_1$ and $v_3$."
        },
        {
          "branch": "case-2-via-23",
          "caseTex": "Case 2. $v_1v_5\\notin E(G)$ and $v_6v_7\\in E(G)$",
          "labels": {
            "1": "v_1",
            "2": "v_2",
            "3": "v_3",
            "4": "v_4",
            "5": "v_7",
            "6": "v_6"
          },
          "notesTex": "Here $H=G[v_1,\\ldots,v_4,v_6,v_7]$ and $v_5\\notin V(H)$. The eight-move reduction uses two starred operations. Each operation retains its own $S_j,T_j,R_j$, with $|S_j|+|T_j|+|R_j|=m$."
        },
        {
          "branch": "case-3",
          "caseTex": "Case 3. $v_1v_5\\notin E(G)$ and $v_6v_7\\notin E(G)$",
          "labels": {
            "1": "v_1",
            "2": "v_2",
            "3": "v_3",
            "4": "v_4",
            "5": "v_7",
            "6": "v_6",
            "7": "v_5"
          },
          "notesTex": "Apart from the cycle, the edges are $v_1v_7,v_3v_5,v_4v_6$."
        }
      ]
    },
    {
      "claim": 25,
      "statementTex": "Suppose that $v_1v_2v_3v_4v_1$ is a $(5,4,3,4)$-cycle with $d(v_1)=5$. Then $v_1$ has no $4_2$-neighbor outside this cycle.",
      "cases": [
        {
          "branch": "distinct",
          "caseTex": "Case 1. $v_6\\ne v_3$ and $v_7\\ne v_3$",
          "labels": {
            "1": "v_1",
            "2": "v_2",
            "3": "v_3",
            "4": "v_4",
            "5": "v_5",
            "6": "v_6",
            "7": "v_7"
          },
          "notesTex": "$v_5$ is the $4_2$-neighbor of $v_1$ and $v_6,v_7$ are its $3$-neighbors."
        },
        {
          "branch": "coincident",
          "caseTex": "Case 2. $v_7=v_3$",
          "labels": {
            "1": "v_1",
            "2": "v_2",
            "3": "v_3",
            "4": "v_4",
            "5": "v_5",
            "6": "v_6"
          },
          "notesTex": "The case $v_6=v_3$ is relabeled so that $v_7=v_3$, as in the manuscript. The extra edge is $v_3v_5$."
        }
      ]
    },
    {
      "claim": 26,
      "statementTex": "If $v_1v_2v_3v_4v_1$ is a $(5,3,3,4)$-cycle with $d(v_1)=5$, $d(v_2)=d(v_3)=3$, and $d(v_4)=4$, then the edge $v_1v_2$ is not contained in any $(5,3,4,4)$-cycle.",
      "cases": [
        {
          "branch": "main",
          "caseTex": "$v_1v_2v_3v_4v_1$ and $v_1v_2v_5v_6v_1$ share $v_1v_2$",
          "labels": {
            "1": "v_1",
            "2": "v_2",
            "3": "v_3",
            "4": "v_4",
            "5": "v_5",
            "6": "v_6"
          },
          "notesTex": "$d(v_5)=d(v_6)=4$. The first saving move colors $v_4$ outside the current list of $v_1$."
        }
      ]
    },
    {
      "claim": 27,
      "statementTex": "A $6$-vertex cannot be incident with two nonadjacent $(6,3,3,4)$-cycles.",
      "cases": [
        {
          "branch": "main",
          "caseTex": "$v_1v_2v_3v_4v_1$ and $v_1v_5v_6v_7v_1$, $d(v_1)=6$",
          "labels": {
            "1": "v_1",
            "2": "v_2",
            "3": "v_3",
            "4": "v_4",
            "5": "v_5",
            "6": "v_6",
            "7": "v_7"
          },
          "notesTex": "$d(v_i)=3$ for $i\\in\\{2,3,5,6\\}$ and $d(v_4)=d(v_7)=4$. The two pair operations require separate triples of symbolic set sizes."
        }
      ]
    },
    {
      "claim": 28,
      "statementTex": "If a $5$-vertex is incident with a $(5,4,3,4)$-cycle, then it has no $3_1$-neighbor.",
      "cases": [
        {
          "branch": "distinct",
          "caseTex": "$v_6\\ne v_3$",
          "labels": {
            "1": "v_1",
            "2": "v_2",
            "3": "v_3",
            "4": "v_4",
            "5": "v_5",
            "6": "v_6"
          },
          "notesTex": "If $v_6=v_3$, then $v_4$ is a $4_{\\ge1}$-neighbor of $v_1$ outside the $(5,3,3,4)$-cycle $v_1v_5v_3v_2v_1$, contrary to Claim 15. Hence $v_6\\ne v_3$. The edges $v_1v_5,v_5v_6$ are the only edges beyond the cycle."
        }
      ]
    },
    {
      "claim": 29,
      "statementTex": "A $5$-vertex cannot be incident with a $(5,3,4,4)$-cycle and a $(5,4,3,4)$-cycle sharing an edge incident with that vertex.",
      "cases": [
        {
          "branch": "main",
          "caseTex": "$v_1v_2v_3v_4v_1$ and $v_1v_2v_5v_6v_1$ share $v_1v_2$",
          "labels": {
            "1": "v_1",
            "2": "v_2",
            "3": "v_3",
            "4": "v_4",
            "5": "v_5",
            "6": "v_6"
          },
          "notesTex": "$d(v_1)=5$, $d(v_2)=d(v_3)=d(v_6)=4$, $d(v_4)=d(v_5)=3$. The first pair saves at $v_4$, and the second pair saves at $v_5$."
        }
      ]
    },
    {
      "claim": 30,
      "statementTex": "A $5$-vertex cannot be incident with a $(5,3,4,4)$-cycle and a $(5,4,3,4)$-cycle whose vertex sets intersect only at that vertex.",
      "cases": [
        {
          "branch": "noedge",
          "caseTex": "$v_3v_6\\notin E(H)$",
          "labels": {
            "1": "v_1",
            "2": "v_2",
            "3": "v_3",
            "4": "v_4",
            "5": "v_5",
            "6": "v_6",
            "7": "v_7"
          },
          "notesTex": "The two cycles are $v_1v_2v_3v_4v_1$ and $v_1v_5v_6v_7v_1$."
        },
        {
          "branch": "edge",
          "caseTex": "$v_3v_6\\in E(H)$",
          "labels": {
            "1": "v_1",
            "2": "v_2",
            "3": "v_3",
            "4": "v_4",
            "5": "v_5",
            "6": "v_6",
            "7": "v_7"
          },
          "notesTex": "The first saving move assigns all $4m+t$ colors demanded by $v_3$, but $v_3$ remains in the current graph until its deletion move. The final saving move at $v_1$ needs no Trim at $v_5$."
        }
      ]
    },
    {
      "claim": 31,
      "statementTex": "A $5_1$-vertex is incident with at most one $(5,4,3,4)$-face.",
      "statementSourceTex": "A $5_1$-vertex is incident with at most one $(5,4,3,4)$-face. Let $u$ be a $5_1$-vertex incident with two such faces. By Claim 12, they are nonadjacent. Let the faces be $uv_1v_2v_3u$ and $uv_4v_5v_6u$, and let $v_7$ be the unique $3$-neighbor of $u$.",
      "cases": [
        {
          "branch": "noedge",
          "caseTex": "$v_2v_5\\notin E(G)$",
          "labels": {
            "1": "u",
            "2": "v_1",
            "3": "v_2",
            "4": "v_3",
            "5": "v_4",
            "6": "v_5",
            "7": "v_6",
            "8": "v_7"
          },
          "notesTex": "$u$ is the central $5_1$-vertex and $v_7$ is its unique $3$-neighbor. The two starred operations have separate symbolic set-size triples."
        },
        {
          "branch": "edge",
          "caseTex": "$v_2v_5\\in E(G)$",
          "labels": {
            "1": "u",
            "2": "v_1",
            "3": "v_2",
            "4": "v_3",
            "5": "v_4",
            "6": "v_5",
            "7": "v_6",
            "8": "v_7"
          },
          "notesTex": "The starred operation on $v_2,v_4$ allows $v_5$ and then $v_2$ to be removed. After trimming $v_1,v_3$ to $5m+2t$, the move $\\langle u\\mid\\{v_1,v_3\\},2m\\rangle$ protects both lists."
        }
      ]
    }
  ],
  "cases": [
    {
      "claim": 1,
      "branch": "degree-0",
      "edges": [],
      "degrees": [
        0
      ],
      "initial": {
        "1": {
          "f": {
            "m": 15,
            "t": 4
          },
          "g": {
            "m": 4,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "d",
          "v": 1
        }
      ]
    },
    {
      "claim": 1,
      "branch": "degree-1",
      "edges": [],
      "degrees": [
        1
      ],
      "initial": {
        "1": {
          "f": {
            "m": 11,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "d",
          "v": 1
        }
      ]
    },
    {
      "claim": 1,
      "branch": "degree-2",
      "edges": [],
      "degrees": [
        2
      ],
      "initial": {
        "1": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "d",
          "v": 1
        }
      ]
    },
    {
      "claim": 2,
      "branch": "k-3",
      "edges": [
        [
          1,
          2
        ],
        [
          1,
          3
        ]
      ],
      "degrees": [
        3,
        3,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 11,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "p",
          "v": 1,
          "amount": {
            "m": 1
          },
          "protect": [
            2
          ]
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "d",
          "v": 1
        },
        {
          "kind": "d",
          "v": 3
        }
      ]
    },
    {
      "claim": 2,
      "branch": "k-4",
      "edges": [
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          1,
          4
        ]
      ],
      "degrees": [
        4,
        3,
        3,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 11,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "p",
          "v": 1,
          "amount": {
            "m": 1
          },
          "protect": [
            2
          ]
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "p",
          "v": 1,
          "amount": {
            "m": 1
          },
          "protect": [
            3
          ]
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "d",
          "v": 1
        },
        {
          "kind": "d",
          "v": 4
        }
      ]
    },
    {
      "claim": 2,
      "branch": "k-5",
      "edges": [
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          1,
          4
        ],
        [
          1,
          5
        ]
      ],
      "degrees": [
        5,
        3,
        3,
        3,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 11,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "p",
          "v": 1,
          "amount": {
            "m": 1
          },
          "protect": [
            2
          ]
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "p",
          "v": 1,
          "amount": {
            "m": 1
          },
          "protect": [
            3
          ]
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "p",
          "v": 1,
          "amount": {
            "m": 1
          },
          "protect": [
            4
          ]
        },
        {
          "kind": "d",
          "v": 4
        },
        {
          "kind": "d",
          "v": 1
        },
        {
          "kind": "d",
          "v": 5
        }
      ]
    },
    {
      "claim": 2,
      "branch": "k-6",
      "edges": [
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          1,
          4
        ],
        [
          1,
          5
        ],
        [
          1,
          6
        ]
      ],
      "degrees": [
        6,
        3,
        3,
        3,
        3,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 11,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "6": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "q",
          "a": 2,
          "b": 3,
          "target": 1,
          "amount": {
            "m": 1
          },
          "pair": 1
        },
        {
          "kind": "p",
          "v": 1,
          "amount": {
            "m": 1
          },
          "protect": [
            4
          ]
        },
        {
          "kind": "d",
          "v": 4
        },
        {
          "kind": "p",
          "v": 1,
          "amount": {
            "m": 1
          },
          "protect": [
            5
          ]
        },
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "p",
          "v": 1,
          "amount": {
            "m": 1
          },
          "protect": [
            6
          ]
        },
        {
          "kind": "d",
          "v": 6
        },
        {
          "kind": "d",
          "v": 1
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "d",
          "v": 3
        }
      ]
    },
    {
      "claim": 3,
      "branch": "k-4",
      "edges": [
        [
          1,
          3
        ],
        [
          3,
          2
        ],
        [
          1,
          4
        ]
      ],
      "degrees": [
        4,
        3,
        3,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 6,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 10,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 6,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "d",
          "v": 4
        },
        {
          "kind": "p",
          "v": 3,
          "amount": {
            "m": 1
          },
          "protect": [
            2
          ]
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "d",
          "v": 1
        }
      ]
    },
    {
      "claim": 3,
      "branch": "k-5",
      "edges": [
        [
          1,
          3
        ],
        [
          3,
          2
        ],
        [
          1,
          4
        ],
        [
          1,
          5
        ]
      ],
      "degrees": [
        5,
        3,
        3,
        3,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 2,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 9,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "d",
          "v": 4
        },
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "p",
          "v": 3,
          "amount": {
            "m": 1
          },
          "protect": [
            2
          ]
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "d",
          "v": 1
        }
      ]
    },
    {
      "claim": 3,
      "branch": "k-6",
      "edges": [
        [
          1,
          3
        ],
        [
          3,
          2
        ],
        [
          1,
          4
        ],
        [
          1,
          5
        ],
        [
          1,
          6
        ]
      ],
      "degrees": [
        6,
        3,
        3,
        3,
        3,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 4,
            "t": 2
          },
          "g": {
            "m": 1,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 8,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 4,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 4,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "6": {
          "f": {
            "m": 4,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "d",
          "v": 4
        },
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "d",
          "v": 6
        },
        {
          "kind": "p",
          "v": 3,
          "amount": {
            "m": 1
          },
          "protect": [
            2
          ]
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "d",
          "v": 1
        }
      ]
    },
    {
      "claim": 4,
      "branch": "case-1",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ],
        [
          4,
          1
        ]
      ],
      "degrees": [
        3,
        4,
        4,
        4
      ],
      "initial": {
        "1": {
          "f": {
            "m": 9,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 2,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "q",
          "a": 2,
          "b": 4,
          "target": 1,
          "amount": {
            "m": 1
          },
          "pair": 1
        },
        {
          "kind": "d",
          "v": 1
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "d",
          "v": 4
        },
        {
          "kind": "d",
          "v": 3
        }
      ]
    },
    {
      "claim": 4,
      "branch": "case-2",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ],
        [
          4,
          1
        ]
      ],
      "degrees": [
        3,
        4,
        4,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 10,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 6,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 6,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 10,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "q",
          "a": 2,
          "b": 4,
          "target": 1,
          "amount": {
            "m": 1
          },
          "pair": 1
        },
        {
          "kind": "d",
          "v": 1
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "d",
          "v": 4
        },
        {
          "kind": "d",
          "v": 3
        }
      ]
    },
    {
      "claim": 4,
      "branch": "case-3",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ],
        [
          4,
          1
        ]
      ],
      "degrees": [
        3,
        4,
        3,
        4
      ],
      "initial": {
        "1": {
          "f": {
            "m": 11,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 11,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "q",
          "a": 2,
          "b": 4,
          "target": 1,
          "amount": {
            "m": 1
          },
          "pair": 1
        },
        {
          "kind": "d",
          "v": 1
        },
        {
          "kind": "p",
          "v": 3,
          "amount": {
            "m": 1
          },
          "protect": [
            2
          ]
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "d",
          "v": 4
        }
      ]
    },
    {
      "claim": 5,
      "branch": "k-4",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ],
        [
          3,
          5
        ]
      ],
      "degrees": [
        3,
        4,
        4,
        3,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 6,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 6,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 10,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "d",
          "v": 1
        },
        {
          "kind": "p",
          "v": 3,
          "amount": {
            "m": 1
          },
          "protect": [
            4
          ]
        },
        {
          "kind": "d",
          "v": 4
        },
        {
          "kind": "p",
          "v": 3,
          "amount": {
            "m": 1
          },
          "protect": [
            5
          ]
        },
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "d",
          "v": 2
        }
      ]
    },
    {
      "claim": 5,
      "branch": "k-5",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ],
        [
          3,
          5
        ],
        [
          3,
          6
        ]
      ],
      "degrees": [
        3,
        4,
        5,
        3,
        3,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 6,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 6,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 10,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "6": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "d",
          "v": 1
        },
        {
          "kind": "p",
          "v": 3,
          "amount": {
            "m": 1
          },
          "protect": [
            4
          ]
        },
        {
          "kind": "d",
          "v": 4
        },
        {
          "kind": "p",
          "v": 3,
          "amount": {
            "m": 1
          },
          "protect": [
            5
          ]
        },
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "p",
          "v": 3,
          "amount": {
            "m": 1
          },
          "protect": [
            6
          ]
        },
        {
          "kind": "d",
          "v": 6
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "d",
          "v": 2
        }
      ]
    },
    {
      "claim": 6,
      "branch": "main",
      "edges": [
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          1,
          4
        ],
        [
          2,
          5
        ],
        [
          2,
          6
        ]
      ],
      "degrees": [
        5,
        4,
        3,
        3,
        3,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 2,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 9,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "6": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "d",
          "v": 4
        },
        {
          "kind": "p",
          "v": 2,
          "amount": {
            "m": 1
          },
          "protect": [
            5
          ]
        },
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "p",
          "v": 2,
          "amount": {
            "m": 1
          },
          "protect": [
            6
          ]
        },
        {
          "kind": "d",
          "v": 6
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "d",
          "v": 1
        }
      ]
    },
    {
      "claim": 7,
      "branch": "k-5",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ],
        [
          4,
          1
        ],
        [
          1,
          5
        ]
      ],
      "degrees": [
        5,
        3,
        3,
        4,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 2,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 9,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 10,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "p",
          "v": 3,
          "amount": {
            "m": 1
          },
          "protect": [
            2
          ]
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "d",
          "v": 1
        },
        {
          "kind": "d",
          "v": 4
        }
      ]
    },
    {
      "claim": 7,
      "branch": "k-6",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ],
        [
          4,
          1
        ],
        [
          1,
          5
        ],
        [
          1,
          6
        ]
      ],
      "degrees": [
        6,
        3,
        3,
        4,
        3,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 4,
            "t": 2
          },
          "g": {
            "m": 1,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 8,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 10,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 4,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 4,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "6": {
          "f": {
            "m": 4,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "d",
          "v": 6
        },
        {
          "kind": "p",
          "v": 3,
          "amount": {
            "m": 1
          },
          "protect": [
            2
          ]
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "d",
          "v": 1
        },
        {
          "kind": "d",
          "v": 4
        }
      ]
    },
    {
      "claim": 8,
      "branch": "noedge",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ],
        [
          4,
          1
        ],
        [
          1,
          5
        ]
      ],
      "degrees": [
        5,
        3,
        4,
        4,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 4,
            "t": 2
          },
          "g": {
            "m": 2,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 8,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 4,
            "t": 2
          },
          "g": {
            "m": 2,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "q",
          "a": 1,
          "b": 3,
          "target": 2,
          "amount": {
            "m": 1
          },
          "pair": 1
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "d",
          "v": 1
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "d",
          "v": 4
        }
      ]
    },
    {
      "claim": 8,
      "branch": "edge",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ],
        [
          4,
          1
        ],
        [
          1,
          5
        ],
        [
          3,
          5
        ]
      ],
      "degrees": [
        5,
        3,
        4,
        4,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 6,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 10,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 10,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 6,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 10,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "q",
          "a": 1,
          "b": 3,
          "target": 2,
          "amount": {
            "m": 1
          },
          "pair": 1
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "q",
          "a": 1,
          "b": 3,
          "target": 5,
          "amount": {
            "m": 1
          },
          "pair": 2
        },
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "d",
          "v": 1
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "d",
          "v": 4
        }
      ]
    },
    {
      "claim": 9,
      "branch": "S-T-R",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ],
        [
          4,
          1
        ],
        [
          1,
          5
        ]
      ],
      "degrees": [
        4,
        4,
        4,
        4,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 9,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 2,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "set9a",
          "v": 2,
          "amount": {
            "s1": 1,
            "r1": 1
          }
        },
        {
          "kind": "set9b",
          "v": 4,
          "amount": {
            "q1": 1,
            "r1": 1
          }
        },
        {
          "kind": "r",
          "v": 3,
          "amount": {
            "m": 4,
            "t": 2
          }
        },
        {
          "kind": "p",
          "v": 2,
          "amount": {
            "q1": 1
          },
          "protect": [
            3
          ]
        },
        {
          "kind": "p",
          "v": 4,
          "amount": {
            "s1": 1
          },
          "protect": [
            3
          ]
        },
        {
          "kind": "p",
          "v": 1,
          "amount": {
            "m": 1
          },
          "protect": [
            5
          ]
        },
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "d",
          "v": 1
        },
        {
          "kind": "r",
          "v": 2,
          "amount": {
            "m": 3,
            "t": 2
          }
        },
        {
          "kind": "p",
          "v": 3,
          "amount": {
            "m": 1
          },
          "protect": [
            2
          ]
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "d",
          "v": 4
        }
      ]
    },
    {
      "claim": 10,
      "branch": "k-5",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ],
        [
          4,
          1
        ],
        [
          1,
          5
        ]
      ],
      "degrees": [
        5,
        3,
        4,
        3,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 6,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 10,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 10,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 6,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "q",
          "a": 1,
          "b": 3,
          "target": 2,
          "amount": {
            "m": 1
          },
          "pair": 1
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "p",
          "v": 4,
          "amount": {
            "m": 1
          },
          "protect": [
            3
          ]
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "d",
          "v": 4
        },
        {
          "kind": "d",
          "v": 1
        }
      ]
    },
    {
      "claim": 10,
      "branch": "k-6",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ],
        [
          4,
          1
        ],
        [
          1,
          5
        ],
        [
          1,
          6
        ]
      ],
      "degrees": [
        6,
        3,
        4,
        3,
        3,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 2,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 9,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 9,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "6": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "d",
          "v": 6
        },
        {
          "kind": "q",
          "a": 1,
          "b": 3,
          "target": 2,
          "amount": {
            "m": 1
          },
          "pair": 1
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "p",
          "v": 4,
          "amount": {
            "m": 1
          },
          "protect": [
            3
          ]
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "d",
          "v": 4
        },
        {
          "kind": "d",
          "v": 1
        }
      ]
    },
    {
      "claim": 11,
      "branch": "main",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ],
        [
          4,
          1
        ],
        [
          1,
          5
        ],
        [
          1,
          6
        ]
      ],
      "degrees": [
        5,
        4,
        3,
        4,
        3,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 11,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 11,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "6": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "q",
          "a": 2,
          "b": 4,
          "target": 3,
          "amount": {
            "m": 1
          },
          "pair": 1
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "p",
          "v": 1,
          "amount": {
            "m": 1
          },
          "protect": [
            5
          ]
        },
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "p",
          "v": 1,
          "amount": {
            "m": 1
          },
          "protect": [
            6
          ]
        },
        {
          "kind": "d",
          "v": 6
        },
        {
          "kind": "p",
          "v": 1,
          "amount": {
            "m": 1
          },
          "protect": [
            2
          ]
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "d",
          "v": 1
        },
        {
          "kind": "d",
          "v": 4
        }
      ]
    },
    {
      "claim": 12,
      "branch": "main",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ],
        [
          4,
          1
        ],
        [
          1,
          5
        ],
        [
          2,
          6
        ]
      ],
      "degrees": [
        5,
        4,
        3,
        4,
        3,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 2,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 9,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 10,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "6": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "p",
          "v": 2,
          "amount": {
            "m": 1
          },
          "protect": [
            6
          ]
        },
        {
          "kind": "d",
          "v": 6
        },
        {
          "kind": "q",
          "a": 2,
          "b": 4,
          "target": 3,
          "amount": {
            "m": 1
          },
          "pair": 1
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "d",
          "v": 4
        },
        {
          "kind": "d",
          "v": 1
        }
      ]
    },
    {
      "claim": 13,
      "branch": "edge",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ],
        [
          4,
          1
        ],
        [
          1,
          5
        ],
        [
          1,
          6
        ],
        [
          3,
          7
        ],
        [
          6,
          7
        ]
      ],
      "degrees": [
        5,
        4,
        4,
        4,
        3,
        3,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 11,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 11,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "6": {
          "f": {
            "m": 11,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "7": {
          "f": {
            "m": 11,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "p",
          "v": 1,
          "amount": {
            "m": 1
          },
          "protect": [
            5
          ]
        },
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "r",
          "v": 6,
          "amount": {
            "m": 10,
            "t": 3
          }
        },
        {
          "kind": "p",
          "v": 7,
          "amount": {
            "m": 1
          },
          "protect": [
            6
          ]
        },
        {
          "kind": "d",
          "v": 6
        },
        {
          "kind": "d",
          "v": 7
        },
        {
          "kind": "q",
          "a": 2,
          "b": 4,
          "target": 1,
          "amount": {
            "m": 1
          },
          "pair": 1
        },
        {
          "kind": "d",
          "v": 1
        },
        {
          "kind": "p",
          "v": 3,
          "protect": [
            2
          ],
          "amount": {
            "m": 2
          }
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "d",
          "v": 4
        }
      ]
    },
    {
      "claim": 13,
      "branch": "noedge",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ],
        [
          4,
          1
        ],
        [
          1,
          5
        ],
        [
          1,
          6
        ],
        [
          3,
          7
        ]
      ],
      "degrees": [
        5,
        4,
        4,
        4,
        3,
        3,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 11,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 11,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "6": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "7": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "q",
          "a": 2,
          "b": 4,
          "target": 3,
          "amount": {
            "m": 1
          },
          "pair": 1
        },
        {
          "kind": "q",
          "a": 2,
          "b": 4,
          "target": 1,
          "amount": {
            "m": 1
          },
          "pair": 2
        },
        {
          "kind": "p",
          "v": 3,
          "amount": {
            "m": 1
          },
          "protect": [
            7
          ]
        },
        {
          "kind": "d",
          "v": 7
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "p",
          "v": 1,
          "amount": {
            "m": 1
          },
          "protect": [
            5
          ]
        },
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "p",
          "v": 1,
          "amount": {
            "m": 1
          },
          "protect": [
            6
          ]
        },
        {
          "kind": "d",
          "v": 6
        },
        {
          "kind": "d",
          "v": 1
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "d",
          "v": 4
        }
      ]
    },
    {
      "claim": 14,
      "branch": "adaptive",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ],
        [
          4,
          1
        ],
        [
          1,
          5
        ],
        [
          1,
          6
        ],
        [
          1,
          7
        ]
      ],
      "degrees": [
        6,
        4,
        3,
        4,
        3,
        3,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 11,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 11,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "6": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "7": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "q",
          "a": 2,
          "b": 4,
          "target": 3,
          "amount": {
            "m": 1
          },
          "pair": 1
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "q",
          "a": 2,
          "b": 4,
          "target": 1,
          "amount": {
            "m": 1
          },
          "pair": 2
        },
        {
          "kind": "p",
          "v": 1,
          "amount": {
            "m": 1
          },
          "protect": [
            5
          ]
        },
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "p",
          "v": 1,
          "amount": {
            "m": 1
          },
          "protect": [
            6
          ]
        },
        {
          "kind": "d",
          "v": 6
        },
        {
          "kind": "r",
          "v": 7,
          "amount": {
            "m": 5,
            "t": 2
          }
        },
        {
          "kind": "p",
          "v": 1,
          "amount": {"m": 1},
          "protect": [7]
        },
        {
          "kind": "d",
          "v": 7
        },
        {
          "kind": "d",
          "v": 1
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "d",
          "v": 4
        }
      ]
    },
    {
      "claim": 15,
      "branch": "distinct",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ],
        [
          4,
          1
        ],
        [
          1,
          5
        ],
        [
          5,
          6
        ]
      ],
      "degrees": [
        5,
        3,
        3,
        4,
        4,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 4,
            "t": 2
          },
          "g": {
            "m": 2,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 9,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 10,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 4,
            "t": 2
          },
          "g": {
            "m": 2,
            "t": 1
          }
        },
        "6": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "d",
          "v": 6
        },
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "q",
          "a": 2,
          "b": 4,
          "target": 3,
          "amount": {
            "m": 1
          },
          "pair": 1
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "d",
          "v": 4
        },
        {
          "kind": "d",
          "v": 1
        }
      ]
    },
    {
      "claim": 15,
      "branch": "coincident",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ],
        [
          4,
          1
        ],
        [
          1,
          5
        ],
        [
          5,
          3
        ]
      ],
      "degrees": [
        5,
        3,
        3,
        4,
        4
      ],
      "initial": {
        "1": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 2,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 9,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 13,
            "t": 4
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "q",
          "a": 2,
          "b": 4,
          "target": 3,
          "amount": {
            "m": 1
          },
          "pair": 1
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "d",
          "v": 4
        },
        {
          "kind": "d",
          "v": 1
        }
      ]
    },
    {
      "claim": 16,
      "branch": "k-5",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ],
        [
          4,
          5
        ]
      ],
      "degrees": [
        3,
        3,
        4,
        4,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 10,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 2,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "d",
          "v": 4
        },
        {
          "kind": "p",
          "v": 2,
          "amount": {
            "m": 1
          },
          "protect": [
            1
          ]
        },
        {
          "kind": "d",
          "v": 1
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "d",
          "v": 3
        }
      ]
    },
    {
      "claim": 16,
      "branch": "k-6",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ],
        [
          4,
          5
        ],
        [
          5,
          6
        ]
      ],
      "degrees": [
        3,
        3,
        4,
        4,
        4,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 10,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 4,
            "t": 2
          },
          "g": {
            "m": 2,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 4,
            "t": 2
          },
          "g": {
            "m": 2,
            "t": 1
          }
        },
        "6": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "d",
          "v": 6
        },
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "p",
          "v": 3,
          "amount": {
            "m": 1
          },
          "protect": [
            4
          ]
        },
        {
          "kind": "d",
          "v": 4
        },
        {
          "kind": "p",
          "v": 2,
          "amount": {
            "m": 1
          },
          "protect": [
            1
          ]
        },
        {
          "kind": "d",
          "v": 1
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "d",
          "v": 3
        }
      ]
    },
    {
      "claim": 17,
      "branch": "k-5",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ],
        [
          4,
          5
        ]
      ],
      "degrees": [
        3,
        4,
        3,
        4,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 6,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 6,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 9,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 6,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 6,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "d",
          "v": 1
        },
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "p",
          "v": 3,
          "amount": {
            "m": 1
          },
          "protect": [
            2
          ]
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "d",
          "v": 4
        }
      ]
    },
    {
      "claim": 17,
      "branch": "k-6",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ],
        [
          4,
          5
        ],
        [
          5,
          6
        ]
      ],
      "degrees": [
        3,
        4,
        3,
        4,
        4,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 6,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 6,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 9,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 2,
            "t": 1
          }
        },
        "6": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "d",
          "v": 1
        },
        {
          "kind": "d",
          "v": 6
        },
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "p",
          "v": 3,
          "amount": {
            "m": 1
          },
          "protect": [
            2
          ]
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "d",
          "v": 4
        }
      ]
    },
    {
      "claim": 18,
      "branch": "main",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          1,
          4
        ],
        [
          3,
          5
        ],
        [
          2,
          6
        ]
      ],
      "degrees": [
        4,
        4,
        4,
        3,
        3,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 6,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 9,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 6,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 6,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 6,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "6": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "d",
          "v": 4
        },
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "p",
          "v": 2,
          "amount": {
            "m": 1
          },
          "protect": [
            6
          ]
        },
        {
          "kind": "d",
          "v": 6
        },
        {
          "kind": "p",
          "v": 2,
          "amount": {
            "m": 1
          },
          "protect": [
            3
          ]
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "d",
          "v": 1
        }
      ]
    },
    {
      "claim": 19,
      "branch": "main",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ],
        [
          4,
          5
        ],
        [
          5,
          6
        ],
        [
          6,
          7
        ]
      ],
      "degrees": [
        3,
        4,
        4,
        3,
        4,
        4,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 2,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 9,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "6": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 2,
            "t": 1
          }
        },
        "7": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "d",
          "v": 1
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "d",
          "v": 7
        },
        {
          "kind": "d",
          "v": 6
        },
        {
          "kind": "p",
          "v": 4,
          "amount": {
            "m": 2
          },
          "protect": [
            3
          ]
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "d",
          "v": 4
        },
        {
          "kind": "d",
          "v": 5
        }
      ]
    },
    {
      "claim": 20,
      "branch": "k-4",
      "edges": [
        [
          1,
          4
        ],
        [
          4,
          5
        ],
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          5,
          6
        ]
      ],
      "degrees": [
        4,
        3,
        3,
        4,
        4,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 10,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 2,
            "t": 1
          }
        },
        "6": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "d",
          "v": 6
        },
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "p",
          "v": 1,
          "amount": {
            "m": 1
          },
          "protect": [
            2
          ]
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "p",
          "v": 1,
          "amount": {
            "m": 1
          },
          "protect": [
            3
          ]
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "d",
          "v": 1
        },
        {
          "kind": "d",
          "v": 4
        }
      ]
    },
    {
      "claim": 20,
      "branch": "k-5",
      "edges": [
        [
          1,
          4
        ],
        [
          4,
          5
        ],
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          5,
          6
        ],
        [
          4,
          7
        ]
      ],
      "degrees": [
        4,
        3,
        3,
        5,
        4,
        3,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 9,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 4,
            "t": 2
          },
          "g": {
            "m": 2,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 4,
            "t": 2
          },
          "g": {
            "m": 2,
            "t": 1
          }
        },
        "6": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "7": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "d",
          "v": 7
        },
        {
          "kind": "d",
          "v": 6
        },
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "p",
          "v": 1,
          "amount": {
            "m": 1
          },
          "protect": [
            2
          ]
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "p",
          "v": 1,
          "amount": {
            "m": 1
          },
          "protect": [
            3
          ]
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "d",
          "v": 1
        },
        {
          "kind": "d",
          "v": 4
        }
      ]
    },
    {
      "claim": 21,
      "branch": "main",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          1,
          4
        ],
        [
          2,
          5
        ],
        [
          3,
          6
        ]
      ],
      "degrees": [
        3,
        5,
        4,
        3,
        3,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 9,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 4,
            "t": 2
          },
          "g": {
            "m": 2,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 4,
            "t": 2
          },
          "g": {
            "m": 2,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "6": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "d",
          "v": 6
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "p",
          "v": 1,
          "amount": {
            "m": 1
          },
          "protect": [
            4
          ]
        },
        {
          "kind": "d",
          "v": 4
        },
        {
          "kind": "d",
          "v": 1
        },
        {
          "kind": "d",
          "v": 2
        }
      ]
    },
    {
      "claim": 22,
      "branch": "main",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ],
        [
          4,
          1
        ],
        [
          1,
          5
        ],
        [
          5,
          6
        ]
      ],
      "degrees": [
        5,
        3,
        4,
        3,
        4,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 10,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 10,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 2,
            "t": 1
          }
        },
        "6": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "d",
          "v": 6
        },
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "q",
          "a": 1,
          "b": 3,
          "target": 2,
          "amount": {
            "m": 1
          },
          "pair": 1
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "p",
          "v": 4,
          "amount": {
            "m": 1
          },
          "protect": [
            3
          ]
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "d",
          "v": 4
        },
        {
          "kind": "d",
          "v": 1
        }
      ]
    },
    {
      "claim": 23,
      "branch": "case-1",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ],
        [
          4,
          1
        ],
        [
          1,
          5
        ],
        [
          4,
          6
        ],
        [
          2,
          6
        ]
      ],
      "degrees": [
        5,
        3,
        4,
        5,
        3,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 4,
            "t": 2
          },
          "g": {
            "m": 2,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 12,
            "t": 4
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 4,
            "t": 2
          },
          "g": {
            "m": 2,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "6": {
          "f": {
            "m": 9,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "q",
          "a": 1,
          "b": 6,
          "target": 2,
          "amount": {
            "m": 1
          },
          "pair": 1
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "d",
          "v": 1
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "d",
          "v": 6
        },
        {
          "kind": "d",
          "v": 4
        }
      ]
    },
    {
      "claim": 23,
      "branch": "case-2",
      "edges": [[1,2],[2,3],[3,4],[4,1],[1,5],[4,6],[5,6],[2,7]],
      "degrees": [5,3,4,5,3,3,3],
      "initial": {
        "1": {"f":{"m":5,"t":2},"g":{"m":3,"t":1}},
        "2": {"f":{"m":13,"t":4},"g":{"m":4,"t":1}},
        "3": {"f":{"m":5,"t":2},"g":{"m":3,"t":1}},
        "4": {"f":{"m":5,"t":2},"g":{"m":2,"t":1}},
        "5": {"f":{"m":10,"t":3},"g":{"m":4,"t":1}},
        "6": {"f":{"m":9,"t":3},"g":{"m":4,"t":1}},
        "7": {"f":{"m":7,"t":2},"g":{"m":4,"t":1}}
      },
      "moves": [
        {"kind":"p","v":5,"amount":{"m":1},"protect":[6]},
        {"kind":"d","v":6},
        {"kind":"d","v":5},
        {"kind":"p","v":2,"amount":{"m":1},"protect":[3,7]},
        {"kind":"d","v":7},
        {"kind":"d","v":2},
        {"kind":"d","v":3},
        {"kind":"d","v":4},
        {"kind":"d","v":1}
      ]
    },
    {
      "claim": 23,
      "branch": "case-3",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ],
        [
          4,
          1
        ],
        [
          1,
          5
        ],
        [
          4,
          6
        ],
        [
          2,
          7
        ]
      ],
      "degrees": [
        5,
        3,
        4,
        5,
        3,
        3,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 3,
            "t": 2
          },
          "g": {
            "m": 2,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 12,
            "t": 4
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 4,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 3,
            "t": 2
          },
          "g": {
            "m": 1,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "6": {
          "f": {
            "m": 4,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "7": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "d",
          "v": 6
        },
        {
          "kind": "p",
          "v": 2,
          "amount": {
            "m": 1
          },
          "protect": [3,7]
        },
        {
          "kind": "d",
          "v": 7
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "d",
          "v": 4
        },
        {
          "kind": "d",
          "v": 1
        }
      ]
    },
    {
      "claim": 24,
      "branch": "case-1",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ],
        [
          4,
          1
        ],
        [
          1,
          5
        ],
        [
          4,
          6
        ],
        [
          3,
          5
        ]
      ],
      "degrees": [
        5,
        3,
        4,
        5,
        3,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 10,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 9,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 2,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 10,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "6": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "d",
          "v": 6
        },
        {
          "kind": "q",
          "a": 1,
          "b": 3,
          "target": 2,
          "amount": {
            "m": 1
          },
          "pair": 1
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "q",
          "a": 1,
          "b": 3,
          "target": 5,
          "amount": {
            "m": 1
          },
          "pair": 2
        },
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "d",
          "v": 1
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "d",
          "v": 4
        }
      ]
    },
    {
      "claim": 24,
      "branch": "case-2-via-23",
      "edges": [[1,2],[2,3],[3,4],[4,1],[1,5],[4,6],[5,6]],
      "degrees": [5,3,4,5,3,3],
      "initial": {
        "1": {"f":{"m":5,"t":2},"g":{"m":3,"t":1}},
        "2": {"f":{"m":9,"t":3},"g":{"m":4,"t":1}},
        "3": {"f":{"m":5,"t":2},"g":{"m":3,"t":1}},
        "4": {"f":{"m":5,"t":2},"g":{"m":2,"t":1}},
        "5": {"f":{"m":10,"t":3},"g":{"m":4,"t":1}},
        "6": {"f":{"m":9,"t":3},"g":{"m":4,"t":1}}
      },
      "moves": [
        {"kind":"q","a":1,"b":3,"target":2,"amount":{"m":1},"pair":1},
        {"kind":"d","v":2},
        {"kind":"d","v":3},
        {"kind":"q","a":1,"b":6,"target":5,"amount":{"m":1},"pair":2},
        {"kind":"d","v":5},
        {"kind":"d","v":6},
        {"kind":"d","v":1},
        {"kind":"d","v":4}
      ]
    },
    {
      "claim": 24,
      "branch": "case-3",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ],
        [
          4,
          1
        ],
        [
          1,
          5
        ],
        [
          4,
          6
        ],
        [
          3,
          7
        ]
      ],
      "degrees": [
        5,
        3,
        4,
        5,
        3,
        3,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 4,
            "t": 2
          },
          "g": {
            "m": 2,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 9,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 9,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 4,
            "t": 2
          },
          "g": {
            "m": 2,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "6": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "7": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "d",
          "v": 6
        },
        {
          "kind": "p",
          "v": 3,
          "amount": {
            "m": 1
          },
          "protect": [
            7
          ]
        },
        {
          "kind": "d",
          "v": 7
        },
        {
          "kind": "q",
          "a": 1,
          "b": 3,
          "target": 2,
          "amount": {
            "m": 1
          },
          "pair": 1
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "d",
          "v": 1
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "d",
          "v": 4
        }
      ]
    },
    {
      "claim": 25,
      "branch": "distinct",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ],
        [
          4,
          1
        ],
        [
          1,
          5
        ],
        [
          5,
          6
        ],
        [
          5,
          7
        ]
      ],
      "degrees": [
        5,
        4,
        3,
        4,
        4,
        3,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 2,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 9,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 9,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "6": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "7": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "q",
          "a": 2,
          "b": 4,
          "target": 3,
          "amount": {
            "m": 1
          },
          "pair": 1
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "d",
          "v": 4
        },
        {
          "kind": "p",
          "v": 5,
          "amount": {
            "m": 1
          },
          "protect": [
            6
          ]
        },
        {
          "kind": "d",
          "v": 6
        },
        {
          "kind": "p",
          "v": 5,
          "amount": {
            "m": 1
          },
          "protect": [
            7
          ]
        },
        {
          "kind": "d",
          "v": 7
        },
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "d",
          "v": 1
        }
      ]
    },
    {
      "claim": 25,
      "branch": "coincident",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ],
        [
          4,
          1
        ],
        [
          1,
          5
        ],
        [
          3,
          5
        ],
        [
          5,
          6
        ]
      ],
      "degrees": [
        5,
        4,
        3,
        4,
        4,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 2,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 13,
            "t": 4
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 9,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "6": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "q",
          "a": 4,
          "b": 5,
          "target": 3,
          "amount": {
            "m": 1
          },
          "pair": 1
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "d",
          "v": 4
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "p",
          "v": 5,
          "amount": {
            "m": 1
          },
          "protect": [
            6
          ]
        },
        {
          "kind": "d",
          "v": 6
        },
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "d",
          "v": 1
        }
      ]
    },
    {
      "claim": 26,
      "branch": "main",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ],
        [
          4,
          1
        ],
        [
          2,
          5
        ],
        [
          5,
          6
        ],
        [
          6,
          1
        ]
      ],
      "degrees": [
        5,
        3,
        3,
        4,
        4,
        4
      ],
      "initial": {
        "1": {
          "f": {
            "m": 4,
            "t": 2
          },
          "g": {
            "m": 2,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 12,
            "t": 4
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 10,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "6": {
          "f": {
            "m": 4,
            "t": 2
          },
          "g": {
            "m": 2,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "p",
          "v": 4,
          "amount": {
            "m": 1
          },
          "protect": [
            1
          ]
        },
        {
          "kind": "q",
          "a": 1,
          "b": 3,
          "target": 2,
          "amount": {
            "m": 1
          },
          "pair": 1
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "d",
          "v": 6
        },
        {
          "kind": "d",
          "v": 1
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "d",
          "v": 4
        }
      ]
    },
    {
      "claim": 27,
      "branch": "main",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ],
        [
          4,
          1
        ],
        [
          1,
          5
        ],
        [
          5,
          6
        ],
        [
          6,
          7
        ],
        [
          7,
          1
        ]
      ],
      "degrees": [
        6,
        3,
        3,
        4,
        3,
        3,
        4
      ],
      "initial": {
        "1": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 2,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 9,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 10,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 9,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "6": {
          "f": {
            "m": 10,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "7": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "q",
          "a": 2,
          "b": 4,
          "target": 3,
          "amount": {
            "m": 1
          },
          "pair": 1
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "d",
          "v": 4
        },
        {
          "kind": "q",
          "a": 5,
          "b": 7,
          "target": 6,
          "amount": {
            "m": 1
          },
          "pair": 2
        },
        {
          "kind": "d",
          "v": 6
        },
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "d",
          "v": 7
        },
        {
          "kind": "d",
          "v": 1
        }
      ]
    },
    {
      "claim": 28,
      "branch": "distinct",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ],
        [
          4,
          1
        ],
        [
          1,
          5
        ],
        [
          5,
          6
        ]
      ],
      "degrees": [
        5,
        4,
        3,
        4,
        3,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 2,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 9,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 5,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 9,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "6": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "q",
          "a": 2,
          "b": 4,
          "target": 3,
          "amount": {
            "m": 1
          },
          "pair": 1
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "d",
          "v": 4
        },
        {
          "kind": "p",
          "v": 5,
          "amount": {
            "m": 1
          },
          "protect": [
            6
          ]
        },
        {
          "kind": "d",
          "v": 6
        },
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "d",
          "v": 1
        }
      ]
    },
    {
      "claim": 29,
      "branch": "main",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ],
        [
          4,
          1
        ],
        [
          2,
          5
        ],
        [
          5,
          6
        ],
        [
          6,
          1
        ]
      ],
      "degrees": [
        5,
        4,
        4,
        3,
        3,
        4
      ],
      "initial": {
        "1": {
          "f": {
            "m": 6,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 10,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 10,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 10,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "6": {
          "f": {
            "m": 6,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "q",
          "a": 1,
          "b": 3,
          "target": 4,
          "amount": {
            "m": 1
          },
          "pair": 1
        },
        {
          "kind": "d",
          "v": 4
        },
        {
          "kind": "p",
          "v": 2,
          "amount": {
            "m": 1
          },
          "protect": [
            3
          ]
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "q",
          "a": 2,
          "b": 6,
          "target": 5,
          "amount": {
            "m": 1
          },
          "pair": 2
        },
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "d",
          "v": 6
        },
        {
          "kind": "d",
          "v": 1
        }
      ]
    },
    {
      "claim": 30,
      "branch": "noedge",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ],
        [
          4,
          1
        ],
        [
          1,
          5
        ],
        [
          5,
          6
        ],
        [
          6,
          7
        ],
        [
          7,
          1
        ]
      ],
      "degrees": [
        5,
        4,
        4,
        3,
        4,
        3,
        4
      ],
      "initial": {
        "1": {
          "f": {
            "m": 10,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 6,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 6,
            "t": 2
          },
          "g": {
            "m": 3,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 10,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "6": {
          "f": {
            "m": 11,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "7": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "q",
          "a": 5,
          "b": 7,
          "target": 6,
          "amount": {
            "m": 1
          },
          "pair": 1
        },
        {
          "kind": "d",
          "v": 6
        },
        {
          "kind": "p",
          "v": 1,
          "amount": {
            "m": 1
          },
          "protect": [
            5
          ]
        },
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "p",
          "v": 1,
          "amount": {
            "m": 1
          },
          "protect": [
            7
          ]
        },
        {
          "kind": "d",
          "v": 7
        },
        {
          "kind": "q",
          "a": 1,
          "b": 3,
          "target": 4,
          "amount": {
            "m": 1
          },
          "pair": 2
        },
        {
          "kind": "d",
          "v": 4
        },
        {
          "kind": "d",
          "v": 1
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "d",
          "v": 2
        }
      ]
    },
    {
      "claim": 30,
      "branch": "edge",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ],
        [
          4,
          1
        ],
        [
          1,
          5
        ],
        [
          5,
          6
        ],
        [
          6,
          7
        ],
        [
          7,
          1
        ],
        [
          3,
          6
        ]
      ],
      "degrees": [
        5,
        4,
        4,
        3,
        4,
        3,
        4
      ],
      "initial": {
        "1": {
          "f": {
            "m": 11,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 11,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 11,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "6": {
          "f": {
            "m": 15,
            "t": 4
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "7": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "p",
          "v": 3,
          "amount": {
            "m": 4,
            "t": 1
          },
          "protect": [
            2
          ]
        },
        {
          "kind": "r",
          "v": 6,
          "amount": {
            "m": 11,
            "t": 3
          }
        },
        {
          "kind": "q",
          "a": 5,
          "b": 7,
          "target": 6,
          "amount": {
            "m": 1
          },
          "pair": 1
        },
        {
          "kind": "d",
          "v": 6
        },
        {
          "kind": "p",
          "v": 1,
          "amount": {
            "m": 1
          },
          "protect": [
            2
          ]
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "r",
          "v": 4,
          "amount": {
            "m": 6,
            "t": 2
          }
        },
        {
          "kind": "p",
          "v": 1,
          "amount": {
            "m": 1
          },
          "protect": [
            4
          ]
        },
        {
          "kind": "d",
          "v": 4
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "p",
          "v": 1,
          "amount": {
            "m": 1
          },
          "protect": [
            5
          ]
        },
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "d",
          "v": 1
        },
        {
          "kind": "d",
          "v": 7
        }
      ]
    },
    {
      "claim": 31,
      "branch": "noedge",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ],
        [
          4,
          1
        ],
        [
          1,
          5
        ],
        [
          5,
          6
        ],
        [
          6,
          7
        ],
        [
          7,
          1
        ],
        [
          1,
          8
        ]
      ],
      "degrees": [
        5,
        4,
        3,
        4,
        4,
        3,
        4,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 15,
            "t": 4
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 11,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "6": {
          "f": {
            "m": 11,
            "t": 3
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "7": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "8": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "p",
          "v": 1,
          "amount": {
            "m": 1
          },
          "protect": [
            8
          ]
        },
        {
          "kind": "d",
          "v": 8
        },
        {
          "kind": "q",
          "a": 2,
          "b": 4,
          "target": 3,
          "amount": {
            "m": 1
          },
          "pair": 1
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "q",
          "a": 5,
          "b": 7,
          "target": 6,
          "amount": {
            "m": 1
          },
          "pair": 2
        },
        {
          "kind": "d",
          "v": 6
        },
        {
          "kind": "p",
          "v": 1,
          "amount": {
            "m": 1
          },
          "protect": [
            2
          ]
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "p",
          "v": 1,
          "amount": {
            "m": 1
          },
          "protect": [
            4
          ]
        },
        {
          "kind": "d",
          "v": 4
        },
        {
          "kind": "d",
          "v": 1
        },
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "d",
          "v": 7
        }
      ]
    },
    {
      "claim": 31,
      "branch": "edge",
      "edges": [
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          4
        ],
        [
          4,
          1
        ],
        [
          1,
          5
        ],
        [
          5,
          6
        ],
        [
          6,
          7
        ],
        [
          7,
          1
        ],
        [
          1,
          8
        ],
        [
          3,
          6
        ]
      ],
      "degrees": [
        5,
        4,
        3,
        4,
        4,
        3,
        4,
        3
      ],
      "initial": {
        "1": {
          "f": {
            "m": 15,
            "t": 4
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "2": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "3": {
          "f": {
            "m": 15,
            "t": 4
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "4": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "5": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "6": {
          "f": {
            "m": 15,
            "t": 4
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "7": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        },
        "8": {
          "f": {
            "m": 7,
            "t": 2
          },
          "g": {
            "m": 4,
            "t": 1
          }
        }
      },
      "moves": [
        {
          "kind": "p",
          "v": 1,
          "amount": {
            "m": 1
          },
          "protect": [
            8
          ]
        },
        {
          "kind": "d",
          "v": 8
        },
        {
          "kind": "q",
          "a": 3,
          "b": 5,
          "target": 6,
          "amount": {
            "m": 1
          },
          "pair": 1
        },
        {
          "kind": "d",
          "v": 6
        },
        {
          "kind": "d",
          "v": 3
        },
        {
          "kind": "r",
          "v": 2,
          "amount": {
            "m": 5,
            "t": 2
          }
        },
        {
          "kind": "r",
          "v": 4,
          "amount": {
            "m": 5,
            "t": 2
          }
        },
        {
          "kind": "p",
          "v": 1,
          "amount": {
            "m": 2
          },
          "protect": [
            2,
            4
          ]
        },
        {
          "kind": "d",
          "v": 2
        },
        {
          "kind": "d",
          "v": 4
        },
        {
          "kind": "d",
          "v": 1
        },
        {
          "kind": "d",
          "v": 5
        },
        {
          "kind": "d",
          "v": 7
        }
      ]
    }
  ],
  "special": {
    "symbolicConstraints": [
      {
        "claim": 30,
        "branch": "edge",
        "pairIndex": 1,
        "constraintsTex": "$s_1,q_1,r_1\\ge0$, $s_1+q_1+r_1=m$.",
        "meaningTex": "$s_1+r_1$ colors are assigned to $v_5$ and $q_1+r_1$ colors are assigned to $v_7$.",
        "constraints": [
          "s_1>=0",
          "q_1>=0",
          "r_1>=0",
          "s_1+q_1+r_1=m"
        ],
        "earlierTrimTex": "$v_6$ is trimmed to $11m+3t$ after $\\langle v_3\\mid v_2,4m+t\\rangle$. $v_4$ is later trimmed to $6m+2t$.",
        "savingAvailabilityTex": "$|L(v_1)\\setminus L(v_5)|\\ge(8m+3t)-(7m+2t-s_1-r_1)=m+t+s_1+r_1\\ge m$."
      },
      {
        "claim": 31,
        "branch": "edge",
        "jointSaving": {
          "whenTex": "After deleting $v_5,v_2$ and trimming both $v_1,v_3$ to $5m+2t$.",
          "availabilityTex": "$|L(u)\\setminus(L(v_1)\\cup L(v_3))|\\ge(13m+4t)-2(5m+2t)=3m\\ge2m$.",
          "demandTex": "$g(u)=3m+t\\ge2m$.",
          "actionTex": "\\langle u\\mid\\{v_1,v_3\\},2m\\rangle",
          "protectedVertices": [
            2,
            4
          ],
          "amountTex": "2m"
        },
        "deletion5Tex": "Writing $a=s_1+r_1$ and $b=q_1+r_1$ for the verification only, $f(v_5)=15m+4t-r_1=(4m+t)+(4m+t-a)+(4m+t-b)+(4m+t)$.",
        "pairTex": "\\langle\\{v_2,v_4\\}\\mid v_5,m\\rangle^{*}"
      }
    ]
  }
};
if(typeof module==="object"&&module.exports) module.exports=data; else root.ReductionData=data;
})(typeof globalThis!=="undefined"?globalThis:this);
