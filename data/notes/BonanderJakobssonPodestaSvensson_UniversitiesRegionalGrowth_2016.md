# Bonander, Jakobsson, Podestà, & Svensson (2016)

> Model-written summary (2026-11-24) of the paper's PDF: published version, Regional Science and Urban Economics 60 (2016) 198–207 (received 2 February 2016, accepted 13 July 2016). Not checked against the paper by a person.

## File Name
BonanderJakobssonPodestaSvensson_UniversitiesRegionalGrowth_2016.pdf

## Paper Title
Universities as engines for regional growth? Using the synthetic control method to analyze the effects of research universities

## Basic Information
- Authors: Carl Bonander, Niklas Jakobsson, Federico Podestà, Mikael Svensson
- Year: 2016
- Journal: Regional Science and Urban Economics 60, 198–207
- Field: Urban and regional economics; economics of higher education
- Subfield: Regional effects of universities; synthetic control
- Study type: Quasi-experimental case study (three treated regions, synthetic control, placebo inference)

## Objective and Contribution (100-150 words)
The paper asks whether granting research-university status to existing institutions raises regional output and entrepreneurship. The treatment is the 1999 Swedish university reform, which upgraded three university colleges (Karlstad, Örebro, Växjö) to universities with the right to award PhDs and with higher block research funding (pp. 1–3). The authors apply the synthetic control method (SCM) to 21 Swedish NUTS3 regions and examine three outcome sets: university-specific outcomes (as a first-stage check), entrepreneurial outcomes (patent applications, startups), and economic outcomes (regional GDP/capita, compensation of employees). They position the paper as using a more credible identification strategy than most of the literature, citing Liu (2015) as the only other credible causal study they know of (p. 2). The contribution is a null-to-small result for a modern, research-intensity (not enrollment) shock.

## Methodology (200-300 words)
**Data.** Annual NUTS3 regional panel for all 21 Swedish regions, 1993–2011 (six pre-years, 13 post-years); longer pre-periods back to 1977 for university outcomes, and startups from 1994 (p. 4). Sources are Statistics Sweden, the Swedish Higher Education Authority, the Swedish Patent and Registration Office and Growth Analysis (Table A1).

**Design.** Each treated region (Värmland, Örebro, Kronoberg) gets its own synthetic control built from a donor pool. The effect is the post-1999 gap between the treated region and its weighted-average synthetic version, $\hat{\alpha}_{1t} = Y_{1t} - \sum_{j=2}^{J+1} w_j^* Y_{jt}$, with $w_j \ge 0$ and $\sum_j w_j = 1$, where $Y_{1t}$ is the treated outcome, $Y_{jt}$ the donor outcomes and $w_j^*$ the weights chosen to minimize $\lVert X_1 - X_0 W \rVert_V$ (p. 3–4).

**Identifying assumption.** The synthetic control reproduces the treated region's counterfactual path, so pre-treatment fit on outcomes and predictors (population, share educated, per capita investment, outcomes in 1994, 1996, 1998) implies comparable unobservables. The authors say SCM relaxes time-invariant confounding and strengthens the plausibility of common trends (p. 2).

**Estimation.** The donor pool is eight regions after dropping the two regions sharing a college (Jämtland, Västernorrland), Kalmar, Norrbotten (mining), and six regions with long-standing research universities (p. 5). Kronoberg is followed only to 2009 because of a 2010 merger.

**Inference.** In-space placebo: the treatment is reassigned to each donor and the distribution of placebo gaps is compared with the treated gap (Fig. A1). Alternative donor pools, including old-university regions, are in Figs. A2 and A3.

**Threats.** Few pre-periods; poor pre-fit for students, patents; the government granted status to Örebro against the agency's recommendation (p. 3), which weakens an exogeneity story only partly; no formal p-values, confidence intervals or standardized pre/post RMSPE ratios are reported in this version.

## Sample and Setting (150-200 words)
The setting is Sweden's 1999 university reform. Sweden has 16 public universities and 19 university colleges; the formal difference is the right to award two-year master's degrees and PhDs, and approximately 86% of total government funding to the 16 universities and 19 colleges goes to universities (p. 3). Treated regions are Värmland (Karlstad; population around 312,000; about 8000 full-time-equivalent students), Örebro (around 290,000; about 9000 FTE students) and Kronoberg (Växjö; around 191,000; about 7000 students) (pp. 2–3). Government motive was to have a university in each region as a catalyst for regional innovation and growth, with funds targeted to regionally important sectors, e.g. paper and pulp, packaging, steel and engineering for Karlstad (p. 3). The unit is the region, so outcomes cover whole labor markets, not firms. The donor pool is Södermanland, Jönköping, Gotland, Blekinge, Halland, Västmanland, Dalarna and Gävleborg (p. 5). Predictor balance is in Table A2; the per-outcome donor weights are in Table A3. In some outcomes weights concentrate on one or two regions (e.g. Västmanland receives weight 1 for students in Värmland and Örebro, Table A3).

## Main Findings (200–300 words)
**First stage: research capacity rose, enrollment did not.** In all three regions there are clear effects on doctoral degrees and professors but not on student numbers (p. 6, Fig. 2). Cumulative relative effects on doctoral degrees are 7.873 (Värmland), 11.873 (Örebro) and 5.298 (Kronoberg); on professors 1.093, 0.845 and 0.669 (Table A4). Student effects are 0.040, 0.059 and −0.006.

**Entrepreneurial outcomes: essentially null.** No effect on patent applications in Värmland and Kronoberg (relative effects −0.140 and 0.136, Table A4). Örebro shows 0.510, which the authors treat with caution because of poor pre-fit (p. 6). Startups are negative but small: −0.047, −0.024, −0.088 (Table A4), and the authors read them as no effect.

**Economic outcomes: no robust effect.** For GDP per capita, relative effects are 0.007 (Värmland), 0.012 (Örebro) and 0.050 (Kronoberg); for compensation of employees −0.040, −0.028 and 0.032 (Table A4). The text describes GDP/capita as "0.7 and 1.2 percentage higher" for the first two regions. Kronoberg shows a relatively large effect against placebos in Fig. A1, but the evidence "is more questionable" when old-university regions are added to the donor pool (Figs. A2, A3; p. 6). The conclusion reports point estimates "ranging from −4% to 5%" (p. 7).

**Interpretation.** The authors suggest the null reflects a more credible design, a shock to research rather than students, a 13-year window possibly too short, a social-science specialization (48–52% of PhDs), lower prestige of new universities, and migration: at most universities only about 30% of students still live in the study region ten years after starting (p. 7).

## Key Figures and Tables
**Fig. 2 — Effects of becoming a research university on intermediate university-related outcomes, Värmland (top panel), Örebro (middle panel), and Kronoberg (bottom panel).** This is the first-stage check. Doctoral degrees and professors fit well before 1999 and diverge sharply after; student numbers fit poorly pre-reform and show no break (p. 6).

**Fig. 3 — Effects on intermediate entrepreneurial factors of getting a research university in Värmland (top panel), Örebro (middle panel) and Kronoberg (bottom panel).** Shows patents and startups. Örebro patents rise after 1999 but pre-fit is poor; startups show no effect (p. 6).

**Fig. 4 — Economic effects of getting a research university in Värmland (top panel), Örebro (middle panel) and Kronoberg (bottom panel).** The main outcome figure for GDP/capita and compensation; the synthetic and actual series track closely after 1999 for Värmland and Örebro, and the text calls the post-period fit near-perfect (p. 6).

**Table A4 — Effect estimates.** Reports cumulative absolute and relative effects by region, to 2011 (Värmland, Örebro) and 2009 (Kronoberg). Relative effect is the absolute effect divided by the synthetic control estimate. It is the only place with numeric effect sizes, and it has no standard errors.

**Table A3 — Region weights for synthetic control groups.** Donor weights vary a lot by outcome; e.g. Dalarna receives 0.979 for Värmland compensation of employees. This signals sensitivity to outcome-specific fits.

**Fig. A1 — Gaps in Värmland (black), Örebro (dash), Kronoberg (dot) and placebo gaps (grey), control regions without universities.** The inference device: first-stage effects are large relative to placebos; economic effects mostly are not.

## Critical Analysis (300–400 words)
**Identification.** The reform is a discrete national policy change, which is a clean treatment date, and synthetic control is a sensible way to handle three treated regions and a small donor pool. Weaknesses are structural. With only eight donors, six pre-years for the main outcomes and a few predictors, there is little room to match on unobserved factors; the authors admit poor pre-fit for students and patents, and fit varies across outcomes as the weights in Table A3 show. The selection of the three colleges was not random: they applied from the end of the 1980s and were reviewed during the 1990s, and the government overrode the agency's advice for Örebro (p. 3). The paper does not argue that timing was unanticipated, so anticipation effects or concurrent regional policy are not ruled out. The regional growth program from 1999 also targeted these three universities (p. 3), so the treatment bundles status, funding and policy attention.

**Inference.** The inference is entirely graphical placebo comparison. No p-values, no RMSPE ratios and no leave-one-out are reported in this version, so "no effect" cannot be separated from "imprecise". The point estimates (e.g. 0.050 for Kronoberg GDP/capita) are not small relative to many policy effects, and the null language ("cast doubt") is stronger than the design's power supports. The causal claim for the first stage is plausible; the claim of zero economic effects is better read as bounds that are wide.

**Measurement.** NUTS3 regions are large, so firm-level or sectoral effects, or effects in the city of the university, are diluted. Patents and startups are aggregate counts, with no industry composition. Several outcomes are in current prices, so deflation choices matter, and "GDP/capita" is described in Table A1 in SEK millions, which appears inconsistent with a per capita measure (not clarified in this version).

**Transfer to community colleges.** The estimand (a research upgrade, with enrollment held constant) is close to the opposite of a 2-year college opening, which adds enrollment and sub-baccalaureate skills. The design (synthetic control on regions, placebo inference) transfers to a single-opening case study, but the outcomes, region size and data resolution do not map to county-level firm, industry and patent outcomes in a US panel.

## Research Gaps and Future Directions
- Formal inference (permutation p-values, post/pre RMSPE ratios, leave-one-out donor checks) is not reported in this version.
- Longer horizons than 13 years, and firm-level or sector-level outcomes (the paper's own point about field specialization, p. 7).
- Mechanisms beyond counts: graduate retention, university-firm links and migration are discussed but not measured (p. 7).
- Heterogeneity by university field (the three are 48–52% social sciences) is raised but not tested.

## Implications and Future Research (100-150 words)
For a project on 2-year college openings and local firms, industry mix and patents, this paper is mainly a caution about research-university effects at the regional level, and a template for a small-N synthetic control. Its lesson is that a shock to research capacity can be large in the first stage and invisible in aggregate regional outcomes, so a study of college openings should specify the first stage (enrollment, programs, awards) and report interval-style inference. It does not speak to technical education, to employer-linked training or to firm-level entry and exit. Its null on patents is for research PhD capacity, which is a different channel from a community college workforce channel. Useful follow-ups would use finer geography than NUTS3 and industry-level outcomes.

## Keywords/Tags
#synthetic-control #research-universities #regional-growth #sweden #knowledge-spillovers #higher-education-reform #placebo-inference #patents #jel-r11 #jel-i23

## Related Papers
- [[Liu (2015)]] Uses SCM and event studies on US land-grant colleges; the authors contrast its student-driven effects with this paper's research-driven shock.
- [[Kantor & Whalley (2014)]] Cited as finding that a 1% increase in university expenditures raises local labor income by 0.08% (US, 1981–1996), in tension with the null here.
- [[Lee (2018)]] Also a synthetic control study of a single new university, and the closest design relative in the corpus.
- [[Andrews (2023)]] Examines college establishment and local invention, the outcome this paper finds null.
